/*
  Warnings:

  - Added the required column `freeCancelationAvailable` to the `TourPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tourCategoryId` to the `TourPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TourPackage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TourPackage" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "freeCancelationAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "tourCategoryId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "TourCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TourPackage" ADD CONSTRAINT "TourPackage_tourCategoryId_fkey" FOREIGN KEY ("tourCategoryId") REFERENCES "TourCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
