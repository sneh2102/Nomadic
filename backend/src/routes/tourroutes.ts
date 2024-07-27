import { Router } from 'express';
import { TourPackageController } from '../controllers/tourcontroller';
const router = Router();


router.get('/tours/:id', TourPackageController.getTourPackageById);



export default router;