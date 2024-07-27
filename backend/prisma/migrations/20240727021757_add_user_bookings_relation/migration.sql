-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "state" TEXT,
ALTER COLUMN "note" SET DEFAULT '';
