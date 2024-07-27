import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ReviewController {
  static async createReview(req: Request, res: Response) {
    const { name, rating, review } = req.body;

    console.log('Received data:', { name, rating, review });
    try {
      const newReview = await prisma.review.create({
        data: {
          name,
          rating: rating.toString(), // Convert rating to string if it's a number
          review,
        },
      });
      res.status(201).json(newReview);
    } catch (error) {
      console.error('Error creating review:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      res.status(500).json({ error: 'Review creation failed', details: errorMessage });
    }
  }

  static async getReviews(req: Request, res: Response) {
    try {
      const reviews = await prisma.review.findMany();
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      res.status(500).json({ error: 'Failed to fetch reviews', details: errorMessage });
    }
  }
}
