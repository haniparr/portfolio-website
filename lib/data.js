import { prisma } from "./prisma";

// Default case study generator for items without custom sections
function getDefaultCaseStudy(item) {
  return {
    services: item.services?.[0] || item.category,
    description: item.description || item.subtitle || "",
    servicesList: item.services?.length ? item.services.reduce((acc, curr, i, arr) => {
      if (i % 2 === 0) acc.push([curr, arr[i + 1] || ""]);
      return acc;
    }, []) : [],
    sections: [
      {
        id: "overview",
        title: "Overview",
        description: item.description || "",
        images: [item.image].filter(Boolean),
      },
    ],
    credits: [
      { name: "Hanif Arrohman", role: "Design & Development" },
    ],
  };
}

// Transform DB project to frontend-compatible format
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

function transformProject(p) {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    image: p.image || p.thumbnail,
    thumbnail: p.thumbnail,
    dbCategory: p.category,
    category: p.services?.[0] || p.category,
    platform: p.platform,
    type: p.type,
    url: p.url,
    description: p.description,
    excerpt: stripHtml(p.description || p.subtitle),
    showcaseDescription: p.showcaseDescription,
    marqueeText: p.marqueeText,
    frameworks: p.frameworks ? JSON.parse(p.frameworks) : [],
    year: p.year,
    services: p.services || [],
    // For UIUX items: map services as tools
    tools: p.category === "uiux" ? p.services : undefined,
    caseStudyUrl: p.category === "uiux" ? p.url : undefined,
    // Build caseStudy from sections/credits
    caseStudy:
      p.sections && p.sections.length > 0
        ? {
            services: p.services?.[0] || p.category || "Branding",
            description: p.description || p.subtitle || "",
            servicesList: p.services?.length ? p.services.reduce((acc, curr, i, arr) => {
              if (i % 2 === 0) acc.push([curr, arr[i + 1] || ""]);
              return acc;
            }, []) : [],
            sections: p.sections.map((s) => ({
              id: s.title.toLowerCase().replace(/\s+/g, "-"),
              title: s.title,
              description: s.description || "",
              images: s.images || [],
            })),
            credits: (p.credits || []).map((c) => ({
              name: c.name,
              role: c.role,
            })),
          }
        : null,
    createdAt: p.createdAt,
    order: p.order,
  };
}

// Get all web-development projects (homepage — only featured)
export async function getWebProjects() {
  const projects = await prisma.project.findMany({
    where: { category: "web-development", published: true, featured: true },
    orderBy: [{ order: "asc" }],
    include: { sections: { orderBy: { order: "asc" } }, credits: true },
  });
  return projects.map(transformProject);
}

// Get UI/UX projects (homepage — only featured)
export async function getUiuxProjects() {
  const projects = await prisma.project.findMany({
    where: { category: "uiux", published: true, featured: true },
    orderBy: [{ order: "asc" }],
  });
  return projects.map(transformProject);
}

// Get graphic design projects (homepage — only featured)
export async function getGraphicDesignProjects() {
  const projects = await prisma.project.findMany({
    where: { category: "graphic-design", published: true, featured: true },
    orderBy: [{ order: "asc" }],
  });
  return projects.map(transformProject);
}

// Get ALL published projects for /work page
export async function getAllWorkProjects() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: [{ order: "asc" }],
    include: { sections: { orderBy: { order: "asc" } }, credits: true },
  });
  return projects.map(transformProject);
}

// Get single project by slug (for /work/[slug])
export async function getProjectBySlug(slug) {
  const project = await prisma.project.findUnique({
    where: { slug },
    include: { sections: { orderBy: { order: "asc" } }, credits: true },
  });
  if (!project) return null;
  return transformProject(project);
}

// Get case study for a project
export function getCaseStudy(item) {
  return item.caseStudy || getDefaultCaseStudy(item);
}

// Get marquee images from projects — takes most recent, loops to fill grid
// targetCount must be divisible by 4 (ThreeDMarquee splits into 4 columns)
export async function getMarqueeImages(category, targetCount = 32) {
  const where = { published: true };
  if (category) where.category = category;

  const projects = await prisma.project.findMany({
    where,
    orderBy: { createdAt: "desc" },
    select: { image: true, thumbnail: true },
  });

  // Collect all unique non-null images
  const seen = new Set();
  const images = [];
  const addImage = (url) => {
    if (url && !seen.has(url)) {
      seen.add(url);
      images.push(url);
    }
  };

  for (const p of projects) {
    addImage(p.image);
    addImage(p.thumbnail);
  }

  // Also grab section images for more variety
  const sections = await prisma.projectSection.findMany({
    where: { project: { published: true, ...(category ? { category } : {}) } },
    orderBy: { project: { createdAt: "desc" } },
    select: { images: true },
  });
  for (const s of sections) {
    for (const img of s.images || []) {
      addImage(img);
    }
  }

  if (images.length === 0) return [];

  // Ensure targetCount is divisible by 4
  const count = Math.ceil(targetCount / 4) * 4;

  // Loop to fill count evenly
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(images[i % images.length]);
  }
  return result;
}

// Get all project slugs for generateStaticParams (all categories)
export async function getAllProjectSlugs() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return projects.map((p) => ({ slug: p.slug }));
}
