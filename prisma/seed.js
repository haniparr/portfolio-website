// prisma/seed.js — Projects only
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding projects...\n");

  // ══════════════════════════════════════════════════════════════════
  // Web Development — React / Next.js
  // ══════════════════════════════════════════════════════════════════
  const reactProjects = [
    {
      slug: "vidi-catering-website",
      title: "VIDI Catering",
      subtitle: "Premium Catering & Hospitality",
      description:
        "Full-stack website for a leading catering and hospitality company with 40+ years of history. Handled everything from UI/UX design and front-end development to back-end systems, database integration, SEO, and performance optimization.",
      showcaseDescription:
        "Built with Next.js and Tailwind CSS, the VIDI Catering website showcases premium catering services with an elegant, conversion-focused design. Features include a dynamic menu, event booking flow, user authentication, and a fully responsive layout optimized for speed and search engines.",
      category: "web-development",
      platform: "react",
      type: "desktop",
      year: "2024",
      services: ["Web Development", "UI/UX Design", "Graphic Design"],
      frameworks: JSON.stringify([
        { name: "Next.js", icon: "⚡", color: "bg-black" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500" },
        { name: "PostgreSQL", icon: "🐘", color: "bg-blue-700" },
        { name: "Prisma", icon: "◆", color: "bg-indigo-500" },
      ]),
      thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      marqueeText: "vidicatering.com",
      url: "https://vidicatering.com",
      featured: true,
      published: true,
      order: 1,
      sections: [
        {
          title: "Overview",
          description:
            "VIDI Group is a company operating in the catering and hospitality sector, specializing in food catering, weddings, gatherings, meetings, corporate events, government tenders, and more. The goal was to build a modern, professional website that reflects the brand's premium positioning.",
          images: [],
          order: 0,
        },
        {
          title: "Design & Development",
          description:
            "Designed UI/UX prototypes in Figma adhering to the brand's elegant guidelines, then built the full website with Next.js, Tailwind CSS, PostgreSQL, and Prisma. Implemented user authentication, responsive design, cross-browser compatibility, speed optimization, and SEO best practices.",
          images: [],
          order: 1,
        },
        {
          title: "Graphic Design",
          description:
            "Beyond the website, I designed posters, Instagram stories, product catalogs, a 40th anniversary invitation card, and other marketing collateral to support the company's digital and print presence.",
          images: [],
          order: 2,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Web Developer & Graphic Designer" },
        { name: "VIDI Group", role: "Client" },
      ],
    },
    {
      slug: "vidi-catering-landing-page",
      title: "VIDI Catering Landing Page",
      subtitle: "Conversion-Driven Meta Ads Landing Page",
      description:
        "A high-performance landing page designed as the primary destination for Meta Ads campaigns — crafted for conversions while staying true to the brand's elegant identity.",
      showcaseDescription:
        "As part of the digital marketing team, I spearheaded the development of a conversion-driven landing page for Meta Ads. Designed an elegant UI/UX prototype in Figma following brand guidelines, then translated it into a fully functional, responsive landing page using Next.js — optimizing performance and alignment with campaign objectives.",
      category: "web-development",
      platform: "react",
      type: "mobile",
      year: "2024",
      services: ["Landing Page", "UI/UX Design", "Meta Ads"],
      frameworks: JSON.stringify([
        { name: "Next.js", icon: "⚡", color: "bg-black" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500" },
        { name: "Figma", icon: "🎯", color: "bg-purple-500" },
      ]),
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      marqueeText: "vidicatering.com/promo",
      url: "https://vidicatering.com",
      featured: false,
      published: true,
      order: 2,
      sections: [
        {
          title: "Overview",
          description:
            "A mobile-first landing page designed to drive catering orders during Ramadan and special events. Served as the primary destination for Meta Ads campaigns, with a focus on clear CTAs and seamless user experience across devices.",
          images: [],
          order: 0,
        },
        {
          title: "Design Process",
          description:
            "Crafted an elegant yet conversion-driven UI/UX prototype in Figma, adhering to the brand's visual guidelines. Ensured cross-device compatibility by translating the design into a fully responsive Next.js page.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "UI/UX Design & Development" },
        { name: "VIDI Marketing Team", role: "Campaign Strategy" },
      ],
    },
    {
      slug: "haniparr-portfolio",
      title: "Haniparr Portfolio",
      subtitle: "Personal Creative Portfolio",
      description:
        "My own portfolio website — a showcase of web development, UI/UX design, and graphic design work, built with modern technologies and interactive animations.",
      showcaseDescription:
        "A personal portfolio featuring 3D marquee effects, smooth Lenis scrolling, Framer Motion animations, and a CMS-powered project management system with admin dashboard. Built with Next.js, Tailwind CSS, PostgreSQL, and Prisma.",
      category: "web-development",
      platform: "react",
      type: "desktop",
      year: "2025",
      services: ["Web Development", "UI/UX Design", "CMS"],
      frameworks: JSON.stringify([
        { name: "Next.js", icon: "⚡", color: "bg-black" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500" },
        { name: "Framer Motion", icon: "🎬", color: "bg-purple-500" },
        { name: "Prisma", icon: "◆", color: "bg-indigo-500" },
      ]),
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      marqueeText: "haniparr.me",
      url: "https://haniparr.me",
      featured: false,
      published: true,
      order: 3,
      sections: [
        {
          title: "Overview",
          description:
            "A personal portfolio built from scratch to showcase my work across web development, UI/UX design, and graphic design. Features a custom CMS, admin dashboard, and interactive animations.",
          images: [],
          order: 0,
        },
        {
          title: "Technical Highlights",
          description:
            "Built with Next.js App Router, Tailwind CSS, PostgreSQL, and Prisma. Features include 3D marquee project showcase, Lenis smooth scrolling, Framer Motion page transitions, and a full admin panel for managing projects, clients, and testimonials.",
          images: [],
          order: 1,
        },
      ],
      credits: [{ name: "Hanif Arrohman", role: "Design & Development" }],
    },
  ];

  // ══════════════════════════════════════════════════════════════════
  // Web Development — WordPress
  // ══════════════════════════════════════════════════════════════════
  const wordpressProjects = [
    {
      slug: "sayur-sleman",
      title: "Sayur Sleman",
      subtitle: "Online Vegetable Marketplace",
      description:
        "An online platform that helps farmers, vegetable traders, and small businesses in Sleman market their products — making fresh produce shopping easy and accessible from home.",
      showcaseDescription:
        "Designed and developed a user-friendly WordPress website for Sayur Sleman. Handled full-stack development including custom theme implementation, plugin integration, and seamless front-end to back-end functionality with a focus on performance optimization and security best practices.",
      category: "web-development",
      platform: "wordpress",
      type: "desktop",
      year: "2022",
      services: ["WordPress", "Web Design", "Full-Stack"],
      frameworks: JSON.stringify([
        { name: "WordPress", icon: "W", color: "bg-blue-700" },
        { name: "Custom Theme", icon: "🎨", color: "bg-green-600" },
        { name: "PHP", icon: "P", color: "bg-indigo-500" },
      ]),
      thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      marqueeText: "sayursleman.id",
      url: "https://sayursleman.id",
      featured: false,
      published: true,
      order: 4,
      sections: [
        {
          title: "Overview",
          description:
            "Sayur Sleman is a platform connecting local farmers and vegetable traders in Sleman, Yogyakarta with customers who want fresh produce delivered to their doorstep. The goal was to make online shopping accessible for both sellers and buyers.",
          images: [],
          order: 0,
        },
        {
          title: "Development",
          description:
            "Responsible for full-stack WordPress development — including custom theme implementation, plugin integration, ensuring seamless functionality across both front-end and back-end systems, with a focus on performance optimization and security best practices.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Freelance WordPress Developer" },
        { name: "Sayur Sleman", role: "Client" },
      ],
    },
    {
      slug: "smkit-ihsanul-fikri-website",
      title: "SMKIT Ihsanul Fikri",
      subtitle: "School Website & Digital Presence",
      description:
        "End-to-end website and digital presence for a private vocational boarding school in Magelang — combining web development with graphic design to build brand consistency across all digital touchpoints.",
      showcaseDescription:
        "Spearheaded end-to-end UI/UX design and WordPress development for the school's web platform, alongside creating visually cohesive Instagram feeds, stories, and promotional banners. Bridged technical execution with creative storytelling to ensure brand consistency and audience engagement.",
      category: "web-development",
      platform: "wordpress",
      type: "desktop",
      year: "2021",
      services: ["WordPress", "Web Design", "Social Media", "Graphic Design"],
      frameworks: JSON.stringify([
        { name: "WordPress", icon: "W", color: "bg-blue-700" },
        { name: "Elementor", icon: "E", color: "bg-pink-500" },
      ]),
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      marqueeText: "smkitihsanulfikri.sch.id",
      url: "#",
      featured: false,
      published: true,
      order: 5,
      sections: [
        {
          title: "Overview",
          description:
            "SMKIT Ihsanul Fikri is a private vocational high school (Teknik Komputer Jaringan) located in Magelang district. The project covered building a complete web platform and establishing a cohesive digital presence across social media.",
          images: [],
          order: 0,
        },
        {
          title: "Web & Social Media",
          description:
            "Built the school's website using WordPress and Elementor, then designed Instagram feeds, stories, and promotional banners — including event visuals for Khutbah Ta'aruf, Akhirussanah, PLSA, and Serambi Ramadan. Every piece bridged technical execution with creative storytelling.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Web Developer & Graphic Designer" },
        { name: "SMKIT Ihsanul Fikri", role: "Client" },
      ],
    },
  ];

  // ══════════════════════════════════════════════════════════════════
  // UI/UX Design Projects
  // ══════════════════════════════════════════════════════════════════
  const uiuxProjects = [
    {
      slug: "giivepro-property-platform",
      title: "Giivepro Property Platform",
      subtitle: "Property Listing & Discovery App",
      description:
        "UI/UX design for a property platform under PT Andara Rejo Makmur — a company operating in construction, property, and architecture sectors. Led the design of visual communication materials through a data-driven approach.",
      showcaseDescription:
        "Collaborated with stakeholders to craft user flows, design system documentation, and innovative solutions using Design Thinking methodologies. Created user journeys and visual communication materials that strategically addressed business needs while balancing aesthetics and functionality.",
      category: "uiux",
      platform: null,
      type: null,
      year: "2022",
      services: ["Figma", "User Research", "Design System", "User Flows"],
      frameworks: JSON.stringify([
        { name: "Figma", icon: "🎯", color: "bg-purple-500" },
        { name: "Design Thinking", icon: "💡", color: "bg-amber-500" },
        { name: "Miro", icon: "📋", color: "bg-yellow-500" },
      ]),
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      marqueeText: "giivepro.id",
      url: "#",
      featured: false,
      published: true,
      order: 1,
      sections: [
        {
          title: "Overview",
          description:
            "PT Andara Rejo Makmur operates in construction, property, and architecture. I led the design and execution of visual communication materials (graphics, layouts, production) through a data-driven approach, crafting user flows, design system documentation, and innovative solutions.",
          images: [],
          order: 0,
        },
        {
          title: "Design Process",
          description:
            "Gathered valid information from clients to synthesize and research ideas. Created user flows and user journeys to create a solid outline for the product. Used Design Thinking methodologies to strategically address business needs while balancing aesthetics and functionality.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "UI/UX Designer" },
        { name: "PT Andara Rejo Makmur", role: "Client" },
      ],
    },
    {
      slug: "vidi-catering-uiux",
      title: "VIDI Catering UI/UX",
      subtitle: "Catering Service Interface Design",
      description:
        "Designed the complete UI/UX for VIDI Catering's landing page and main website — from wireframes and prototyping in Figma to a conversion-driven, brand-aligned final design.",
      showcaseDescription:
        "Created an elegant yet conversion-driven UI/UX prototype in Figma adhering to the brand's premium guidelines. Designed the complete user interface for the main website and Meta Ads landing pages, ensuring seamless user experience and cross-device compatibility.",
      category: "uiux",
      platform: null,
      type: null,
      year: "2024",
      services: ["Figma", "Prototyping", "Wireframing", "Brand Guidelines"],
      frameworks: JSON.stringify([
        { name: "Figma", icon: "🎯", color: "bg-purple-500" },
        { name: "Protopie", icon: "🎬", color: "bg-blue-500" },
      ]),
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      marqueeText: "vidicatering.com",
      url: "#",
      featured: false,
      published: true,
      order: 2,
      sections: [
        {
          title: "Overview",
          description:
            "Designed the complete user interface for VIDI Catering's web presence — including the main website and conversion-focused Meta Ads landing pages for Ramadan and seasonal campaigns.",
          images: [],
          order: 0,
        },
        {
          title: "Design Details",
          description:
            "Followed the brand's elegant and premium visual guidelines throughout. Created wireframes, interactive prototypes, and final high-fidelity designs in Figma. Ensured responsive layouts that work beautifully on both desktop and mobile devices.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "UI/UX Designer" },
        { name: "VIDI Group", role: "Client" },
      ],
    },
    {
      slug: "smkit-school-portal-uiux",
      title: "SMKIT School Portal",
      subtitle: "Educational Platform Interface",
      description:
        "UI/UX design for SMKIT Ihsanul Fikri's web portal — focused on making school information accessible for students, parents, and staff with a clean, intuitive interface.",
      showcaseDescription:
        "Designed the user interface and experience for a vocational boarding school's web portal. Created user flows tailored for students, parents, and administrators, ensuring information architecture was clear and navigation was intuitive across all user types.",
      category: "uiux",
      platform: null,
      type: null,
      year: "2021",
      services: ["Figma", "User Flows", "Prototyping", "Information Architecture"],
      frameworks: JSON.stringify([
        { name: "Figma", icon: "🎯", color: "bg-purple-500" },
        { name: "FigJam", icon: "📝", color: "bg-orange-500" },
      ]),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      marqueeText: "smkitihsanulfikri.sch.id",
      url: "#",
      featured: false,
      published: true,
      order: 3,
      sections: [
        {
          title: "Overview",
          description:
            "A web portal for SMKIT Ihsanul Fikri Mungkid, a vocational boarding school in Magelang. The portal needed to serve multiple user types — students browsing announcements, parents checking schedules, and staff managing content.",
          images: [],
          order: 0,
        },
        {
          title: "UX Research & Design",
          description:
            "Mapped out distinct user flows for each audience type. Designed a clean information architecture that makes school news, academic schedules, and event information easy to find. Prototyped in Figma with mobile-first responsive layouts.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "UI/UX Designer" },
        { name: "SMKIT Ihsanul Fikri", role: "Client" },
      ],
    },
    {
      slug: "sayur-sleman-uiux",
      title: "Sayur Sleman Marketplace",
      subtitle: "Fresh Produce E-Commerce UX",
      description:
        "Designed the shopping experience for an online vegetable marketplace — making it easy for customers to browse products, place orders, and connect with local farmers and traders in Sleman.",
      showcaseDescription:
        "Created the user experience design for Sayur Sleman's online marketplace. Focused on simplifying the shopping flow for customers while making product listing intuitive for farmers and small businesses. Designed with accessibility in mind for a wide range of user demographics.",
      category: "uiux",
      platform: null,
      type: null,
      year: "2022",
      services: ["Figma", "User Research", "Wireframing", "E-Commerce UX"],
      frameworks: JSON.stringify([
        { name: "Figma", icon: "🎯", color: "bg-purple-500" },
        { name: "Maze", icon: "🧪", color: "bg-green-500" },
      ]),
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      marqueeText: "sayursleman.id",
      url: "#",
      featured: false,
      published: true,
      order: 4,
      sections: [
        {
          title: "Overview",
          description:
            "Sayur Sleman connects local farmers, vegetable traders, and small businesses in Sleman with customers. The UX needed to be simple enough for non-tech-savvy farmers while being convenient for shoppers.",
          images: [],
          order: 0,
        },
        {
          title: "Design Approach",
          description:
            "Researched user needs from both sides of the marketplace. Designed a streamlined product browsing and ordering flow, with clear categories, search functionality, and an easy checkout process. Prioritized mobile-friendly layouts since most users access the platform from their phones.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "UI/UX Designer" },
        { name: "Sayur Sleman", role: "Client" },
      ],
    },
  ];

  // ══════════════════════════════════════════════════════════════════
  // Graphic Design Projects
  // ══════════════════════════════════════════════════════════════════
  const graphicProjects = [
    {
      slug: "vidi-catering-branding",
      title: "VIDI Catering Visual Identity",
      subtitle: "Posters, Social Media & Catalogs",
      description:
        "Complete visual design work for VIDI Catering — including event posters, Instagram stories and feeds, product catalogs, and marketing collateral that supports the company's premium brand positioning.",
      showcaseDescription:
        "As the in-house graphic designer for VIDI Group, I created a wide range of visual materials — from event posters and Instagram content to product catalogs and promotional banners. Every piece was designed to maintain brand consistency while driving engagement across digital and print channels.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2024",
      services: ["Branding", "Social Media", "Print"],
      frameworks: JSON.stringify([
        { name: "Illustrator", icon: "Ai", color: "bg-orange-600" },
        { name: "Photoshop", icon: "Ps", color: "bg-blue-600" },
        { name: "Canva", icon: "C", color: "bg-cyan-500" },
      ]),
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      marqueeText: "VIDI Catering",
      url: "#",
      featured: true,
      published: true,
      order: 1,
      sections: [
        {
          title: "Overview",
          description:
            "VIDI Group needed a consistent visual identity across all their marketing channels. I was responsible for creating designs for company needs that would be published across digital and print media.",
          images: [],
          order: 0,
        },
        {
          title: "Deliverables",
          description:
            "Created event posters, Instagram stories and feeds, product catalogs, promotional banners, and other marketing collateral — all adhering to the brand's elegant gold-and-white visual language.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Graphic Designer" },
        { name: "VIDI Group", role: "Client" },
      ],
    },
    {
      slug: "vidi-food-tasting-poster",
      title: "Food Tasting Flight Event",
      subtitle: "Event Poster Design",
      description:
        "Eye-catching poster design for VIDI Catering's Food Tasting Flight event at Grha Sarina Vidi — featuring menu highlights, partner logos, and a warm, inviting visual style that reflects the brand's premium identity.",
      showcaseDescription:
        "Designed the promotional poster for VIDI Catering's Food Tasting Flight event, held at Grha Sarina Vidi. The poster showcased the full menu, event partners (Savitri, Saqara Videobooth), and key highlights including All You Can Eat, Wedding Simulation, and free consultation.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2025",
      services: ["Print"],
      frameworks: JSON.stringify([
        { name: "Illustrator", icon: "Ai", color: "bg-orange-600" },
        { name: "Photoshop", icon: "Ps", color: "bg-blue-600" },
      ]),
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      marqueeText: "Food Tasting Flight",
      url: "#",
      featured: false,
      published: true,
      order: 2,
      sections: [
        {
          title: "Overview",
          description:
            "Promotional poster for the Food Tasting Flight event at Grha Sarina Vidi. Featured the complete menu, event partners, and key highlights — designed to drive RSVPs while staying true to VIDI's premium brand identity.",
          images: [],
          order: 0,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Graphic Designer" },
        { name: "VIDI Catering", role: "Client" },
      ],
    },
    {
      slug: "vidi-40th-anniversary",
      title: "VIDI 40th Anniversary",
      subtitle: "Invitation Card Design",
      description:
        "Premium invitation card design for VIDI Group's 40th anniversary celebration — featuring an elegant black and gold theme with a custom anniversary logo reading '40 Tahun Semakin Hebat dan Kuat'.",
      showcaseDescription:
        "Designed a premium invitation card for VIDI Group's 40th anniversary milestone. The design features an elegant black and gold color palette, a custom anniversary logo, and sophisticated typography that reflects the company's four decades of excellence in catering and hospitality.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2024",
      services: ["Print", "Branding"],
      frameworks: JSON.stringify([
        { name: "Illustrator", icon: "Ai", color: "bg-orange-600" },
        { name: "Photoshop", icon: "Ps", color: "bg-blue-600" },
      ]),
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
      marqueeText: "VIDI 40th Anniversary",
      url: "#",
      featured: false,
      published: true,
      order: 3,
      sections: [
        {
          title: "Overview",
          description:
            "A milestone celebration deserved a milestone design. Created a premium invitation card with an elegant black and gold theme, custom anniversary logo, and refined typography reflecting 40 years of excellence.",
          images: [],
          order: 0,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Graphic Designer" },
        { name: "VIDI Group", role: "Client" },
      ],
    },
    {
      slug: "hacky-bakery-branding",
      title: "Hacky Bakery",
      subtitle: "Brand Identity & Social Media",
      description:
        "Complete brand identity and social media design for a homemade bakery offering fresh, high-quality baked goods and beautifully curated hampers — including logo design, Instagram feed content, and product cards.",
      showcaseDescription:
        "Developed the full brand identity for Hacky Bakery, a homemade bakery specializing in fresh baked goods and gift hampers. Created the logo, established visual guidelines, and designed Instagram feed content and product cards that showcase items like Korean Garlic Cheese bread and Macaroni Schotel.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2023",
      services: ["Branding", "Social Media"],
      frameworks: JSON.stringify([
        { name: "Illustrator", icon: "Ai", color: "bg-orange-600" },
        { name: "Photoshop", icon: "Ps", color: "bg-blue-600" },
        { name: "Canva", icon: "C", color: "bg-cyan-500" },
      ]),
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      marqueeText: "Hacky Bakery",
      url: "#",
      featured: false,
      published: true,
      order: 4,
      sections: [
        {
          title: "Overview",
          description:
            "Hacky Bakery is a homemade bakery offering fresh, high-quality baked goods and beautifully curated hampers perfect for gifting. They needed a cohesive brand identity that felt warm, artisanal, and professional.",
          images: [],
          order: 0,
        },
        {
          title: "Brand & Social Media",
          description:
            "Designed the logo with a leaf motif reflecting natural, fresh ingredients. Created a cohesive Instagram feed showcasing products like Korean Garlic Cheese, Cake Tape Crumble, and various pastries. Each post card was designed with clean typography and appetizing product photography.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Graphic Designer" },
        { name: "Hacky Bakery", role: "Client" },
      ],
    },
    {
      slug: "hacky-bakery-catalog",
      title: "Hacky Bakery Menu Catalog",
      subtitle: "Printed Menu Design",
      description:
        "Designed a comprehensive printed menu catalog for Hacky Bakery — featuring bread, cakes, and pastry items with clean typography and appetizing product photography across multiple pages.",
      showcaseDescription:
        "Created a multi-page printed menu catalog for Hacky Bakery covering their full product range — from Korean Garlic Cheese and Smoked Beef Cream Cheese breads to Nastar Cake, Japanese Cheese Cake, and various Mille Crepes flavors. Designed with the brand's green color palette and clean layout.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2023",
      services: ["Print"],
      frameworks: JSON.stringify([
        { name: "Illustrator", icon: "Ai", color: "bg-orange-600" },
        { name: "InDesign", icon: "Id", color: "bg-pink-600" },
      ]),
      image: "https://images.unsplash.com/photo-1486427944544-d2c246c4df4e?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1486427944544-d2c246c4df4e?w=800&q=80",
      marqueeText: "Hacky Bakery Menu",
      url: "#",
      featured: false,
      published: true,
      order: 5,
      sections: [
        {
          title: "Overview",
          description:
            "A comprehensive printed menu catalog covering Hacky Bakery's full product range — organized into Bread, Cake, and Pastry categories with pricing, product photography, and the brand's signature green color palette.",
          images: [],
          order: 0,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Graphic Designer" },
        { name: "Hacky Bakery", role: "Client" },
      ],
    },
    {
      slug: "smkit-social-media",
      title: "SMKIT Ihsanul Fikri Social Media",
      subtitle: "Instagram Feed & Stories Design",
      description:
        "Designed visually cohesive Instagram feeds, stories, and promotional banners for a vocational boarding school — covering events like Khutbah Ta'aruf, Akhirussanah, PLSA, and Serambi Ramadan.",
      showcaseDescription:
        "Created a consistent visual identity across SMKIT Ihsanul Fikri's social media channels. Designed Instagram feeds, stories, and promotional banners for key school events including Khutbah Ta'aruf, Akhirussanah Emperor Generation, PLSA orientation, and Serambi Ramadan. Bridged creative storytelling with brand consistency.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2021",
      services: ["Social Media"],
      frameworks: JSON.stringify([
        { name: "Photoshop", icon: "Ps", color: "bg-blue-600" },
        { name: "Canva", icon: "C", color: "bg-cyan-500" },
      ]),
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      marqueeText: "SMKIT Social Media",
      url: "#",
      featured: false,
      published: true,
      order: 6,
      sections: [
        {
          title: "Overview",
          description:
            "SMKIT Ihsanul Fikri needed a cohesive social media presence. I designed content for key school events — Khutbah Ta'aruf, Akhirussanah Emperor Generation, PLSA orientation for new students, and the Serambi Ramadan program.",
          images: [],
          order: 0,
        },
        {
          title: "Content Design",
          description:
            "Created event announcement posts, Instagram stories with consistent branding, and promotional banners. Each design maintained the school's identity while being engaging and shareable for the student and parent audience.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Graphic Designer" },
        { name: "SMKIT Ihsanul Fikri", role: "Client" },
      ],
    },
    {
      slug: "vidi-social-media-content",
      title: "VIDI Social Media Content",
      subtitle: "Instagram Feed & Stories",
      description:
        "Ongoing social media content design for VIDI Catering — creating engaging Instagram posts, stories, and promotional visuals for Ramadan campaigns, seasonal events, and product promotions.",
      showcaseDescription:
        "Designed ongoing social media content for VIDI Catering's Instagram presence. Created promotional visuals for Buka Puasa Hemat campaigns, seasonal catering packages, wedding services, and pricelist announcements. Every post maintained the brand's premium gold-and-white aesthetic.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2024",
      services: ["Social Media"],
      frameworks: JSON.stringify([
        { name: "Photoshop", icon: "Ps", color: "bg-blue-600" },
        { name: "Illustrator", icon: "Ai", color: "bg-orange-600" },
        { name: "Canva", icon: "C", color: "bg-cyan-500" },
      ]),
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
      marqueeText: "VIDI Social Media",
      url: "#",
      featured: false,
      published: true,
      order: 7,
      sections: [
        {
          title: "Overview",
          description:
            "Ongoing social media design for VIDI Catering covering Ramadan campaigns (Buka Puasa Hemat), wedding catering promotions, seasonal packages, and pricelist announcements — all maintaining the brand's premium gold-and-white aesthetic.",
          images: [],
          order: 0,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "Graphic Designer" },
        { name: "VIDI Catering", role: "Client" },
      ],
    },
    {
      slug: "andara-rejo-makmur-visuals",
      title: "PT Andara Rejo Makmur",
      subtitle: "Visual Communication Materials",
      description:
        "Led the design of graphic layouts and production communication materials for a construction and property company — including materials for the Giivepro property platform, balancing aesthetics and functionality through a data-driven approach.",
      showcaseDescription:
        "Led the design, development, and implementation of graphic, layout, and production communication materials for PT Andara Rejo Makmur, a company operating in construction, property, and architecture. Created visual materials for the Giivepro property platform using Design Thinking methodologies.",
      category: "graphic-design",
      platform: null,
      type: null,
      year: "2022",
      services: ["Branding", "Print"],
      frameworks: JSON.stringify([
        { name: "Illustrator", icon: "Ai", color: "bg-orange-600" },
        { name: "Photoshop", icon: "Ps", color: "bg-blue-600" },
        { name: "Figma", icon: "🎯", color: "bg-purple-500" },
      ]),
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      marqueeText: "Andara Rejo Makmur",
      url: "#",
      featured: false,
      published: true,
      order: 8,
      sections: [
        {
          title: "Overview",
          description:
            "PT Andara Rejo Makmur operates in construction, property, and architecture. I led the design of visual communication materials including graphics, layouts, and production materials for the Giivepro property platform.",
          images: [],
          order: 0,
        },
        {
          title: "Design Approach",
          description:
            "Used a data-driven approach to create materials that strategically addressed business needs. Collaborated with stakeholders to ensure every design balanced aesthetics with functionality, supporting the company's property listing and sales goals.",
          images: [],
          order: 1,
        },
      ],
      credits: [
        { name: "Hanif Arrohman", role: "UI/UX Designer & Graphic Designer" },
        { name: "PT Andara Rejo Makmur", role: "Client" },
      ],
    },
  ];

  // ══════════════════════════════════════════════════════════════════
  // Upsert All Projects
  // ══════════════════════════════════════════════════════════════════
  const allProjects = [
    ...reactProjects,
    ...wordpressProjects,
    ...uiuxProjects,
    ...graphicProjects,
  ];

  for (const p of allProjects) {
    const { sections = [], credits = [], ...data } = p;
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: { ...data },
      create: {
        ...data,
        sections: sections.length ? { create: sections } : undefined,
        credits: credits.length ? { create: credits } : undefined,
      },
    });
    console.log(`✅ Project: ${p.title} [${p.category}]`);
  }

  console.log("\n🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
