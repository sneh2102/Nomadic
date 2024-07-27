import { Router } from 'express';
import { ReviewController } from '../controllers/reviewcontroller';


const router = Router();

router.post('/reviews', ReviewController.createReview);
router.get('/getreviews', ReviewController.getReviews);

export default router;
