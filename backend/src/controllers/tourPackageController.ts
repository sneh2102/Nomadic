// src/controllers/tourPackageController.ts
import { Request, Response } from 'express';
import {prismaClient as prisma} from '../server';

// Create a new tour package
export const createTourPackage = async (req: Request, res: Response) => {
    try {
        const { name, location, city, price, image, freeCancelationAvailable, tourCategoryId } = req.body;
        const newTourPackage = await prisma.tourPackage.create({
            data: { name, location, city, price, image, freeCancelationAvailable, tourCategoryId},
        });
        res.status(201).json({
            message: "Tour package created successfully",
            data: newTourPackage
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create tour package' });
    }
};

// Get all tour packages with pagination, filtering, and sorting
export const getAllTourPackages = async (req: Request, res: Response) => {
    try {
        const { page = 1, pageSize = 10, name, minPrice, maxPrice, city, sortBy = 'name', sortOrder = 'asc' } = req.query;

        const filters: any = {};
        if (name) {
            filters.name = { contains: String(name), mode: 'insensitive' }; // Case insensitive search
        }
        if (minPrice) {
            filters.price = { gte: Number(minPrice) };
        }
        if (maxPrice) {
            if (!filters.price) {
                filters.price = {};
            }
            filters.price.lte = Number(maxPrice);
        }
        if (city) {
            filters.location = { contains: String(city), mode: 'insensitive' }; // Case insensitive search
        }

        const skip = (Number(page) - 1) * Number(pageSize);
        const take = Number(pageSize);

        const tourPackages = await prisma.tourPackage.findMany({
            where: filters,
            orderBy: { [String(sortBy)]: sortOrder === 'asc' ? 'asc' : 'desc' },
            skip: skip,
            take: take,
        });

        const total = await prisma.tourPackage.count({ where: filters });

        res.status(200).json({
            data: tourPackages,
            meta: {
                total,
                page: Number(page),
                pageSize: Number(pageSize),
                totalPages: Math.ceil(total / Number(pageSize)),
            },
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve tour packages' });
    }
};


// Get a single tour package by ID
export const getTourPackageById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tourPackage = await prisma.tourPackage.findUnique({
            where: { id: Number(id) },
        });
        if (tourPackage) {
            res.status(200).json(tourPackage);
        } else {
            res.status(404).json({ error: 'Tour package not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve tour package' });
    }
};

// Update a tour package by ID
export const updateTourPackageById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, location, city, price, image, freeCancelationAvailable, tourCategoryId } = req.body;
        const updatedTourPackage = await prisma.tourPackage.update({
            where: { id: Number(id) },
            data: { name, location, city, price, image, freeCancelationAvailable, tourCategoryId },
        });
        res.status(200).json({
            message: "Tour package updated successfully",
            data: updatedTourPackage
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update tour package' });
    }
};

// Delete a tour package by ID
export const deleteTourPackageById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.tourPackage.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({
            message: "Tour package deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete tour package' });
    }
};
