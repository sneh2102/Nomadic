import express from 'express';
import { getAllTourCategories } from '../controllers/tourCategoryController';
const router = express.Router();

router.get('/tour-categories', getAllTourCategories);

export default router;