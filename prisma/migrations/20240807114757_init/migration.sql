-- CreateEnum
CREATE TYPE "SkillCategory" AS ENUM ('FRONTEND', 'FULLSTACK', 'FRAMEWORK', 'BACKEND', 'DATABASE', 'TOOLS');

-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('CDI', 'FREELANCE', 'CONSULTANT');

-- CreateEnum
CREATE TYPE "PresenceType" AS ENUM ('ON_SITE', 'HYBRID', 'REMOTE');

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "SkillCategory" NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contractType" "ContractType" NOT NULL,
    "stack" TEXT[],
    "tasks" TEXT[],
    "presenceType" "PresenceType" NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);
