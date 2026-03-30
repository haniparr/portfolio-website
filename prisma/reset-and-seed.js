// prisma/reset-and-seed.js
// Run this instead of `npx prisma db seed` to replace all old data
// Usage: node prisma/reset-and-seed.js

require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function resetAndSeed() {
  console.log("🧹 Resetting all portfolio data...\n");

  // Delete in order (children first due to foreign keys)
  const deletedSections = await prisma.projectSection.deleteMany();
  console.log(`  Deleted ${deletedSections.count} project sections`);

  const deletedCredits = await prisma.projectCredit.deleteMany();
  console.log(`  Deleted ${deletedCredits.count} project credits`);

  const deletedProjects = await prisma.project.deleteMany();
  console.log(`  Deleted ${deletedProjects.count} projects`);

  const deletedTestimonials = await prisma.testimonial.deleteMany();
  console.log(`  Deleted ${deletedTestimonials.count} testimonials`);

  const deletedClients = await prisma.client.deleteMany();
  console.log(`  Deleted ${deletedClients.count} clients`);

  console.log("\n✅ All old data removed. Now running seed...\n");

  // Run the seed
  const { execSync } = require("child_process");
  execSync("npx prisma db seed", { stdio: "inherit" });
}

resetAndSeed()
  .catch((e) => {
    console.error("❌ Reset failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
