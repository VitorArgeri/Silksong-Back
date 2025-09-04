/*
  Warnings:

  - You are about to drop the column `name` on the `bosses` table. All the data in the column will be lost.
  - Added the required column `title` to the `bosses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bosses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "diaryId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "bosses_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "diaries" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_bosses" ("createdAt", "description", "diaryId", "id", "imgUrl", "location", "updatedAt") SELECT "createdAt", "description", "diaryId", "id", "imgUrl", "location", "updatedAt" FROM "bosses";
DROP TABLE "bosses";
ALTER TABLE "new_bosses" RENAME TO "bosses";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
