# Assignment 3

- Date created: July 30, 2024
- Last modification date: July 30, 2024
- Group project main repository: https://git.cs.dal.ca/snehp/csci-5709-grp-10
- Invidual branch: https://git.cs.dal.ca/snehp/csci-5709-grp-10/-/tree/A3/smit
- Group deployment URL: http://csci-5709-g10.netlify.app/

## Deployment
##### Frontend
- Frontend is deployed on Netlify, served from Github.
##### Backend
- Backend is deployed on GCP Cloud Run using Docker containers.

##### Database
- Database is hosted on AWS RDS using PostgreSQL.

## Built with

 - React - Library for creating user interface [1]
 - Express - Web framework for REST APIs.
 - Prisma - Database ORM for database modelling [2].
 - PostreSQL - Database engine [3]
 - Material UI - UI framework providing accessible components.
 - Tailwind CSS - Styling utilities

## Tools and Technology used
- AWS RDS - Managed database service [4]
- GCP Cloud Run - Deploying backend docker containers [5].
- GCP Cloud Build - Running backed CI CD pipeline [5].
- Docker - Container technology to ship backend images [6].
- GCP Artifact Registry - To store backend docker images [5].
- Netlify - Hosting frontend artifacts [7].
- Vite - Javascirpt bundler to build frontend artifacts [8].

## Individual feature worked on
##### Tour listing feature: Tour package filtering, sorting, pagination
Feature URL: http://csci-5709-g10.netlify.app/ (Select location from dropdown and click search, you should see the listing page)


## Folder Structure
- At root frontend and backend folders are created to separate frontend and backend.
- `.gitlab-ci.yml` - File to deploy frontend to Netify
- `cloudbuild.yaml` - File to deploy backend to GCP Cloud Run
##### Frontend
- We are following the folder structure required for the tool vite.
- `public` - Contains all the files and assets that need to be served to public unmodified.
- `src` - Your source code that vite will bundle into javascript chunks.
- `index.html` - entry point of the application that vite will use to identify the entry js file.
- `*.config.js` - config files
- `package.json` - describes required depenencies, project verision and avaialable scripts.
- `src/components` - Reusable react components
- `src/hooks` - Reusable react hooks created to contain feature specific states
- `src/interfaces` - Typescript type definitions
- `src/pages` - React component to display in browser via URL
- `src/services` - Services to make feature wise API Calls and interact with backend.
- `src/utils` - Reusable utilities
- `src/app.tsx` - Root App component
- `src/main.tsx` - Entry point

##### Backend
- `prisma` - Prisma migrations, database schema and seed scripts.
- `src/routes` - API Routes that calls specific controllers based on endpoint.
- `src/controllers` - Backend business logic that serves and handles API Requests.
- `src/server.ts` - Entry point of the backend application server.

## Overview of files I have worked on
- `frontend/src/hooks/useLocations.ts`
- `frontend/src/hooks/useTourCategories.ts`
- `frontend/src/hooks/useTours.ts`
- `frontend/src/services/tourService.ts`
- `frontend/src/services/tourCategoryService.ts`
- `frontend/src/services/locationService.ts`
- `frontend/src/pages/SearchPage.tsx`
- `frontend/src/pages/HomePage.tsx`
- `frontend/src/components/search/**`
- `frontend/src/components/ui/**`
- `backend/prisma/seedTourPackages.ts`
- `backend/src/controllers/tourCategorycontroller.ts`
- `backend/src/controllers/tourLocationController.ts`
- `backend/src/controllers/tourPackageController.ts`
- `backend/src/routes/tourCategoryRouter.ts`
- `backend/src/routes/tourLocationRouter.ts`
- `backend/src/routes/tourPackageRouter.ts`

 ## Source Codes

 #### frontend/src/services/tourService.ts

 ```
 export const getTours = async ({
  categories,
  city,
  freeCancelationAvailable,
  minPrice,
  maxPrice,
  sortBy,
  sortOrder,
  page,
  startDate,
  endDate,
  minDuration,
  maxDuration,
  pageSize,
}: {
  categories: string | null;
  city: string | null;
  freeCancelationAvailable: string | null;
  minPrice: string | null;
  maxPrice: string | null;
  sortBy: string | null;
  sortOrder: string | null;
  page: string | null;
  startDate: string | null;
  endDate: string | null;
  minDuration: string | null;
  maxDuration: string | null;
  pageSize: string | null;
}) => {
  try {
    let query = categories ? `?categories=${categories}` : '';
    query += city ? `${query ? '&' : '?'}city=${city}` : '';
    query += freeCancelationAvailable ? `${query ? '&' : '?'}freeCancelationAvailable=${freeCancelationAvailable}` : '';
    query += minPrice ? `${query ? '&' : '?'}minPrice=${minPrice}` : '';
    query += maxPrice ? `${query ? '&' : '?'}maxPrice=${maxPrice}` : '';
    query += sortBy ? `${query ? '&' : '?'}sortBy=${sortBy}` : '';
    query += sortOrder ? `${query ? '&' : '?'}sortOrder=${sortOrder}` : '';
    query += page ? `${query ? '&' : '?'}page=${page}` : '';
    query += startDate ? `${query ? '&' : '?'}startDate=${startDate}` : '';
    query += endDate ? `${query ? '&' : '?'}endDate=${endDate}` : '';
    query += minDuration ? `${query ? '&' : '?'}minDuration=${minDuration}` : '';
    query += maxDuration ? `${query ? '&' : '?'}maxDuration=${maxDuration}` : '';
    query += pageSize ? `${query ? '&' : '?'}pageSize=${pageSize}` : '';
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/tours${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data: TourList = await response.json();
    return data;
  } catch (error: any) {
    return new Error(error.error);
  }
}
```
- Service that makes API calls using fetch, forms query using various arguments passed.

 #### backend/src/routes/tourPackageRouter.ts

 ```
import express from 'express';
import {
    createTourPackage,
    getAllTourPackages,
    getTourPackageById,
    updateTourPackageById,
    deleteTourPackageById,
} from '../controllers/tourPackageController';

const router = express.Router();

router.post('/tours', createTourPackage);
router.get('/tours', getAllTourPackages);
router.get('/tours/:id', getTourPackageById);
router.put('/tours/:id', updateTourPackageById);
router.delete('/tours/:id', deleteTourPackageById);

export default router;

```
- Defines API endpoints for managing tour pacakages.

 #### backend/src/controllers/tourPackageController.ts

 ```
        const filters: any = {};
        if (name) {
            filters.name = { contains: String(name), mode: "insensitive" }; // Case insensitive search
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
            filters.city = { contains: String(city), mode: "insensitive" }; // Case insensitive search
        }
        if (freeCancelationAvailable) {
            filters.freeCancelationAvailable =
                freeCancelationAvailable === "true";
        }
        if (categoriesArray.length > 0) {
            filters.tourCategoryId = {
                in: categoriesArray.map((category) => Number(category)),
            };
        }
        if (startDate && endDate) {
            filters.startDate = {
                gte: new Date(String(startDate)),
            };
            filters.endDate = {
                lte: new Date(String(endDate)),
            };
        }
        if (minDuration) {
            filters.duration = {
                gte: Number(minDuration),
            };
        }
        if (maxDuration) {
            if (!filters.duration) {
                filters.duration = {};
            }
            filters.duration.lte = Number(maxDuration);
        }
 ```
 Forms filter object to pass to Prisma

 ```
    const tourPackages = await prisma.tourPackage.findMany({
        where: filters,
        orderBy: { [String(sortBy)]: sortOrder === "asc" ? "asc" : "desc" },
        skip: skip,
        take: take,
    });
 ```
 Function call to fetch packages using Prisma

 ```
res.status(200).json({
    data: tourPackages,
    meta: {
        total,
        page: Number(page),
        pageSize: Number(pageSize),
        totalPages: Math.ceil(total / Number(pageSize)),
        freeCancelationAvailableCount,
        minPrice: minPriceTourPackage?.price || 0,
        maxPrice: maxPriceTourPackage?.price || 0,
    },
});
 ```
Express response to return relevant details.

 #### backend/prisma/schema.prisma
 ```
model TourCategory {
  id           Int           @id @default(autoincrement())
  name         String
  tourPackages TourPackage[]
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}

model TourPackage {
  id                       Int          @id @default(autoincrement())
  name                     String
  location                 String
  city                     String
  price                    Float
  image                    String
  freeCancelationAvailable Boolean
  tourCategory             TourCategory @relation(fields: [tourCategoryId], references: [id])
  tourCategoryId           Int
  accommodationDetails     String
  transportationDetails    String
  activities               String
  startDate                DateTime
  endDate                  DateTime
  duration                 Int
  createdAt                DateTime     @default(now())
  updatedAt                DateTime     @updatedAt
  reviews                  Review[]

  Bookings Bookings[]
}
 ```

Prisma database schema that defines TourPackage and TourCategory and a relation between these two.

 #### backend/prisma/seedTourPacakges.ts

```
prisma.tourCategory.create({
    data: {
      name: "Tours",
      tourPackages: {
        createMany: {
          data: generateTourPackages("Tours", "Cultural Tour"),
        },
      },
    },
});
```
Seed script that creates a random tour packages when we seed our database.
```
const getRandomImage = (id: number): string => `https://picsum.photos/250?random=${id}`;

const getRandomBoolean = (): boolean => Math.random() < 0.5;

const generateTourPackages = (categoryName: string, baseName: string): Prisma.TourPackageCreateManyTourCategoryInput[] => {
  const tourPackages: Prisma.TourPackageCreateManyTourCategoryInput[] = [];
  for (let i = 1; i <= 1000; i++) {
    const generateRandomStartDate = (): Date => {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 60) + 1);
      return startDate;
    }
    const startDate = generateRandomStartDate();
    const endDate = new Date(startDate.getTime());
    endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 9) + 1);
    const duration = Math.floor(Math.random() * 9) + 1;
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    tourPackages.push({
      name: `${baseName} in ${randomCity.city} ${i}`,
      city: randomCity.city,
      location: randomCity.location,
      freeCancelationAvailable: getRandomBoolean(),
      image: getRandomImage(i),
      price: Math.floor(Math.random() * 600) + 20,
      startDate: startDate,
      endDate: endDate,
      duration: duration,
      accommodationDetails: `Accommodation Details for ${baseName} ${i}`,
      activities: `Activities for ${baseName} ${i}`,
      transportationDetails: `Transportation Details for ${baseName} ${i}`
    });
  }
  return tourPackages;
};
```
Randomly generates 1000 tour packages in various categories and cities.

#### Image attribution

- All tour images are randomly assigned to tour from https://picsum.photos/



## References
[1] “React,” React Blog RSS.  [Online]. Available: https://react.dev/. [Accessed: 30-Jul-2024]

[2] “Node.js web application framework,” Express.  [Online]. Available: https://expressjs.com/. [Accessed: 30-Jul-2024]

[3] P. G. D. Group, PostgreSQL, 28-Jul-2024.  [Online]. Available: https://www.postgresql.org/. [Accessed: 30-Jul-2024]

[4] Managed SQL database - amazon relational database service (RDS) - AWS.  [Online]. Available: https://aws.amazon.com/rds/. [Accessed: 30-Jul-2024] 

[5] “Cloud run,” Google.  [Online]. Available: https://cloud.google.com/run. [Accessed: 30-Jul-2024] 

[6] “Accelerated Container Application Development,” Docker, 08-Jul-2024.  [Online]. Available: https://www.docker.com/. [Accessed: 30-Jul-2024]

[7] “Scale & Ship Faster with a composable web architecture,” Netlify.  [Online]. Available: https://www.netlify.com/. [Accessed: 30-Jul-2024] 

[8] “Vite,” vitejs.  [Online]. Available: https://vitejs.dev/. [Accessed: 30-Jul-2024]

[9]    “JavaScript with syntax for types.,” TypeScript.  [Online]. Available: https://www.typescriptlang.org/. [Accessed: 30-Jul-2024] 

## Authors

#### Smit Patel (smit.patel@dal.ca  |  sm537103@dal.ca)