import { prisma } from "../server";

class BookingService {
    async createBookings(id: string, bookingObj: object) {
        console.log("bookingObj", bookingObj);
        console.log("id", Number(id));

        const newBooking = await prisma.bookings.create({
            data: {
                ...bookingObj,
                user: {
                    connect: { id: Number(id) }, // Ensure userId is an integer
                },
            },
        });

        return newBooking;

        // return newBooking;
    }
    async getBookings() {
        return await prisma.bookings.findMany();
    }

    async updateBooking(id: number, bookingObj: object) {
        return await prisma.bookings.update({
            where: { id: id },
            data: bookingObj
        });
    }
    async getBookingsByUserId(userId: number) {
        return await prisma.bookings.findMany({
            where: {
                userId: userId,
            },
            include: {
                user: true, // Optionally include user details
            },
        });
    }
}

export default new BookingService();