import { Request, Response } from 'express';
import bookingService from '../services/bookings';
class BookingController {
    async createBooking(req: Request, res: Response) {
        try {
            const { id, startDate, endDate, duration, totalCost, bookingDate, accommodationDetails, transportationDetails, activities, note, country, state, city, imgUrl } = req.body;
            console.log("id in controller", typeof id);

            // Add validations here
            // if (!email || !name || !startDate || !endDate || !duration || !totalCost || !bookingDate || !accommodationDetails || !transportationDetails || !activities || !country || !state || !city || !imgUrl) {
            //     return res.status(400).json({ success: false, message: 'Missing required fields' });
            // }

            const booking = await bookingService.createBookings(id, { startDate, endDate, duration, totalCost, bookingDate, accommodationDetails, transportationDetails, activities, note, country, state, city, imgUrl });
            console.log("created booking", booking);
            res.status(201).json({ success: true, data: booking });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getbookings(req: Request, res: Response) {
        try {
            const bookings = await bookingService.getBookings();
            res.status(200).json({ success: true, length: bookings.length, data: bookings, });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getbookingsOfUser(req: Request, res: Response) {
        try {
            const { id } = req.params
            const bookingsOfUser = await bookingService.getBookingsByUserId(Number(id));
            res.status(200).json({ success: true, length: bookingsOfUser.length, data: bookingsOfUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async updateBooking(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updateObj = req.body;
            const booking = await bookingService.updateBooking(Number(id), updateObj);
            if (!booking) {
                return res.status(404).json({ success: false, message: 'Booking not found' });
            }
            res.status(200).json({ success: true, data: booking });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new BookingController();