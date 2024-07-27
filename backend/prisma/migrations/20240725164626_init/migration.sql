/*
  Warnings:

  - Added the required column `city` to the `TourPackage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TourPackage" ADD COLUMN     "city" TEXT NOT NULL;
