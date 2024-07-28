import express from "express"
import bookingRoutes from "../src/routes/bookingRoute"
const router = express.Router()


router.use("/booking", bookingRoutes)


export default router;