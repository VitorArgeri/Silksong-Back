/*
  Warnings:

  - You are about to drop the column `title` on the `characters` table. All the data in the column will be lost.
  - Added the required column `name` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_characters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "diaryId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "characters_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "diaries" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_characters" ("createdAt", "description", "diaryId", "id", "imgUrl", "location", "type", "updatedAt") SELECT "createdAt", "description", "diaryId", "id", "imgUrl", "location", "type", "updatedAt" FROM "characters";
DROP TABLE "characters";
ALTER TABLE "new_characters" RENAME TO "characters";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
