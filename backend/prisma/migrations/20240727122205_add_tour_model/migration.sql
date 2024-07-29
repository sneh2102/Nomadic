-- CreateTable
CREATE TABLE "Tour" (
    "tourId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dateFrom" TIMESTAMP(3) NOT NULL,
    "dateTo" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "guide" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "discount" DOUBLE PRECISION,
    "promocode" TEXT,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("tourId")
);
