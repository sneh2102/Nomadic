/*
  Warnings:

  - You are about to drop the column `rating` on the `TourPackage` table. All the data in the column will be lost.
  - You are about to drop the column `reviews` on the `TourPackage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TourPackage" DROP COLUMN "rating",
DROP COLUMN "reviews";
