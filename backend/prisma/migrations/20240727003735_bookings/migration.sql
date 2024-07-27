-- CreateTable
CREATE TABLE "Bookings" (
    "id" SERIAL NOT NULL,
    "startDate" TEXT,
    "endDate" TEXT,
    "duration" TEXT,
    "totalCost" TEXT,
    "bookingDate" TEXT,
    "accommodationDetails" TEXT,
    "transportationDetails" TEXT,
    "activities" TEXT,
    "note" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bookings_userId_key" ON "Bookings"("userId");

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
