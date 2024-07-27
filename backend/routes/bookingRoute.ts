import express from "express"
import bookingController from "../controller/bookings"
const router = express.Router()

router.get("/", bookingController.getbookings)
router.get("/:id", bookingController.getbookingsOfUser)
router.post("/", bookingController.createBooking)
router.patch("/:id", bookingController.updateBooking)



export default router;