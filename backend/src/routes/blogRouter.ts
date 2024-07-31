// author: Heli Desai

import express from "express";
import {
  getAllBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getBlogPostById,
  getBlogCategories,
} from "../controllers/blogController";

const router = express.Router();

router.get("/blog", getAllBlogPosts);
router.get("/blog/:id", getBlogPostById);
router.post("/blog", createBlogPost);
router.put("/blog/:id", updateBlogPost);
router.delete("/blog/:id", deleteBlogPost);
router.get("/blog-categories", getBlogCategories);

export default router;
