-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '',
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Stage" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '',
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT '',
    "appId" TEXT NOT NULL DEFAULT '',
    "stageId" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT '',
    "startsAt" INTEGER NOT NULL DEFAULT 0,
    "endsAt" INTEGER NOT NULL DEFAULT 0
);
