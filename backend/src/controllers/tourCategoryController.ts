import { Request, Response } from 'express';
import {prismaClient as prisma} from '../server';


export const getAllTourCategories = async (req: Request, res: Response) => {
    try {
        const tourCategories = await prisma.tourCategory.findMany();
        res.status(200).json({
            data: tourCategories,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tour categories' });
    }
}