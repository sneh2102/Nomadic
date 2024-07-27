import express from 'express';
import { createTourCategory, getAllTourCategories, updateTourCategory } from '../controllers/tourCategoryController';
const router = express.Router();

router.get('/tour-categories', getAllTourCategories);
router.post('/tour-categories', createTourCategory);
router.put('/tour-categories/:id', updateTourCategory);

export default router;