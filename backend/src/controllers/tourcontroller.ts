import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class TourPackageController {
  static async getTourPackageById(req: Request, res: Response) {
    const { id } = req.params;
  
    try {
      const tourPackageId = parseInt(id, 10);
      if (isNaN(tourPackageId)) {
        return res.status(400).json({ error: 'Invalid tour package ID' });
      }
  
      const tourPackage = await prisma.tourPackage.findUnique({
        where: { id: tourPackageId },
        include: { tourCategory: true }
      });
  
      if (!tourPackage) {
        return res.status(404).json({ error: 'Tour package not found' });
      }
  
      res.json(tourPackage);
    } catch (error) {
      console.error('Error fetching tour package:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      res.status(500).json({ error: 'Failed to fetch tour package', details: errorMessage });
    }
  }
}