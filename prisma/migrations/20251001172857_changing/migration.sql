/*
  Warnings:

  - You are about to drop the `bosses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `enemies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `npcs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "bosses";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "enemies";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "npcs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "characters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "diaryId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "characters_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "diaries" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
