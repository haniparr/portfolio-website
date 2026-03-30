-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "frameworks" TEXT,
ADD COLUMN     "platform" TEXT,
ADD COLUMN     "showcaseDescription" TEXT,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "year" DROP NOT NULL;
