# Blog Feature - Assignment 3

**Date Created:** July 25, 2024  
**Last Modification Date:** July 30, 2024

**Group Project Main Repository:** [Group Repository: https://git.cs.dal.ca/snehp/csci-5709-grp-10](https://git.cs.dal.ca/snehp/csci-5709-grp-10)  
**Individual Branch:** [Individual Branch: https://git.cs.dal.ca/snehp/csci-5709-grp-10/-/tree/heli_desai](https://git.cs.dal.ca/snehp/csci-5709-grp-10/-/tree/heli_desai)/  
**Group Deployment URL:** [Group Deployment: http://csci-5709-g10.netlify.app/](http://csci-5709-g10.netlify.app/)

## Deployment

### Frontend

The frontend is deployed on Netlify, served from GitHub.

### Backend

The backend is deployed on GCP Cloud Run using Docker containers.

### Database

The database is hosted on AWS RDS using PostgreSQL.

## Built with

- **React:** Library for creating user interfaces. [React](https://react.dev/)
- **Express:** Web framework for REST APIs. [Express](https://expressjs.com/)
- **Prisma:** Database ORM for database modeling. [Prisma](https://www.prisma.io/)
- **PostgreSQL:** Database engine. [PostgreSQL](https://www.postgresql.org/)
- **Material UI:** UI framework providing accessible components. [Material UI](https://material-ui.com/)
- **Tailwind CSS:** Styling utilities. [Tailwind CSS](https://tailwindcss.com/)

## Tools and Technology Used

- **AWS RDS:** Managed database service. [AWS RDS](https://aws.amazon.com/rds/)
- **GCP Cloud Run:** Deploying backend Docker containers. [GCP Cloud Run](https://cloud.google.com/run)
- **GCP Cloud Build:** Running backend CI/CD pipeline. [GCP Cloud Build](https://cloud.google.com/build)
- **Docker:** Container technology to ship backend images. [Docker](https://www.docker.com/)
- **GCP Artifact Registry:** To store backend Docker images. [GCP Artifact Registry](https://cloud.google.com/artifact-registry)
- **Netlify:** Hosting frontend artifacts. [Netlify](https://www.netlify.com/)
- **Vite:** JavaScript bundler to build frontend artifacts. [Vite](https://vitejs.dev/)

## Individual Feature Worked On

**Blog Feature:** Blog listing and blog detail pages.
- **Blog List Page URL:** [Blog List](http://csci-5709-g10.netlify.app/blogs)
- **Blog Detail Page URL:** [Blog Detail](http://csci-5709-g10.netlify.app/blogs/:id)

## Folder Structure

At the root, `frontend` and `backend` folders are created to separate frontend and backend.

- **`.gitlab-ci.yml`** - File to deploy frontend to Netlify.
- **`cloudbuild.yaml`** - File to deploy backend to GCP Cloud Run.

### Frontend

We are following the folder structure required for the tool Vite.

- **public** - Contains all the files and assets that need to be served to the public unmodified.
- **src** - Your source code that Vite will bundle into JavaScript chunks.
  - **components** - Reusable React components.
  - **hooks** - Reusable React hooks created to contain feature-specific states.
  - **interfaces** - TypeScript type definitions.
  - **pages** - React component to display in the browser via URL.
  - **services** - Services to make feature-wise API calls and interact with the backend.
  - **utils** - Reusable utilities.
  - **app.tsx** - Root App component.
  - **main.tsx** - Entry point.
- **index.html** - Entry point of the application that Vite will use to identify the entry JS file.
- **package.json** - Describes required dependencies, project version, and available scripts.
- ***.config.js** - Config files.

### Backend

- **prisma** - Prisma migrations, database schema, and seed scripts.
- **src/routes** - API Routes that call specific controllers based on the endpoint.
- **src/controllers** - Backend business logic that serves and handles API requests.
- **src/server.ts** - Entry point of the backend application server.

## Overview of Files I Have Worked On

**Frontend:**
- `frontend/src/hooks/useComments.ts`
- `frontend/src/services/commentService.ts`
- `frontend/src/pages/BlogPage.tsx`
- `frontend/src/pages/BlogDetail.tsx`
- `frontend/src/components/blog/CommentList.tsx`
- `frontend/src/components/blog/CommentForm.tsx`
- `frontend/src/components/ui/StarRating.tsx`
- `frontend/src/components/layout/MainLayout.tsx`
- `frontend/src/components/ui/HeroSection.tsx`
- `frontend/src/components/ui/PopularTopics.tsx`
- `frontend/src/components/ui/PopularTopics.css`

**Backend:**
- `backend/prisma/schema.prisma`
- `backend/src/controllers/blogController.ts`
- `backend/src/routes/blogRouter.ts`

## Source Codes

**Frontend:**

### `useComments.ts`
```typescript
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchComments, postComment } from '../services/commentService';

interface Comment {
    id: number;
    blogPostId: number;
    name: string;
    comment: string;
    createdAt: string;
}

export const useComments = (blogPostId: string) => {
    const queryClient = useQueryClient();

    const commentsQuery = useQuery({
        queryKey: ['comments', blogPostId],
        queryFn: async () => {
            const comments = await fetchComments(blogPostId);
            return Array.isArray(comments) ? comments : [];
        },
    });

    const addCommentMutation = useMutation(postComment, {
        onSuccess: () => {
            queryClient.invalidateQueries(['comments', blogPostId]);
        },
    });

    return {
        ...commentsQuery,
        addComment: addCommentMutation.mutate,
    };
};
```

### `commentService.ts`
```typescript
import axios from 'axios';

export const fetchComments = async (blogPostId: string) => {
    const response = await axios.get(`/api/v1/posts/${blogPostId}/comments`);
    return response.data;
};

export const postComment = async (comment: { blogPostId: string; name: string; comment: string }) => {
    const response = await axios.post(`/api/v1/comment/`, comment);
    return response.data;
};
```

### `BlogPage.tsx`
```tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import BlogCard from '../components/BlogCard';
import { fetchBlogPosts } from '../services/blogService';
import './BlogPage.css';

const BlogPage: React.FC = () => {
    const { data: blogs, isLoading, error } = useQuery('blogs', fetchBlogPosts);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading blogs: {error.message}</p>;

    return (
        <div className="blog-page">
            <h1 className="blog-page__title">Blog Posts</h1>
            <div className="blog-page__content">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
```

### `BlogDetail.tsx`
```tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogPostById } from '../services/blogService';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import './BlogDetail.css';

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: blog, isLoading, error } = useQuery(['blog', id], () => fetchBlogPostById(id));

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading blog: {error.message}</p>;
    if (!blog) return <p>Blog not found</p>;

    return (
        <div className="blog-detail">
            <h1 className="blog-detail__title">{blog.title}</h1>
            <img src={blog.thumbnail} alt={blog.title} className="blog-detail__thumbnail" />
            <div className="blog-detail__content">
                {blog.content}
            </div>
            <CommentForm blogPostId={id} />
            <CommentList blogPostId={id} />
        </div>
    );
};

export default BlogDetail;
```

**Backend:**

### `blogController.ts`
```typescript
import { Request, Response } from "express";
import { prismaClient as prisma } from "../server";
import { Prisma } from "@prisma/client";

export async function getAllBlogPosts(req: Request, res: Response) {
    try {
        const { category, page, limit = 6 } = req.query;
        const filter: Prisma.BlogPostWhereInput = {};
        if (category) {
            filter.category = {
                contains: category.toString(),
                mode: "insensitive",
            };
        }
        const blogs = await prisma.blogPost.findMany({
            where: filter,
            orderBy: {
                createdAt: "desc",
            },
            skip: page ? (parseInt(page.toString()) - 1) * parseInt(limit.toString()) : 

0,
            take: parseInt(limit.toString()),
            select: {
                id: true,
                title: true,
                description: true,
                thumbnail: true,
                category: true,
                createdAt: true,
            },
        });

        const totalBlogsCount = await prisma.blogPost.count({
            where: filter,
        });
        res.status(200).json({
            data: blogs,
            meta: {
                page: page ? parseInt(page.toString()) : 1,
                totalPages: Math.ceil(totalBlogsCount / parseInt(limit.toString())),
                limit: parseInt(limit.toString()),
                total: totalBlogsCount,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: "Failed to fetch blog posts: " + error.message });
        } else {
            res.status(500).json({ error: "Failed to fetch blog posts due to an unknown error" });
        }
    }
}

export async function createBlogPost(req: Request, res: Response) {
    const { title, content, category, description, thumbnail } = req.body;
    try {
        const blog = await prisma.blogPost.create({
            data: { title, content, category, description, thumbnail },
        });
        res.status(201).json(blog);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: "Failed to create blog post: " + error.message });
        } else {
            res.status(500).json({ error: "Failed to create blog post due to an unknown error" });
        }
    }
}

export async function updateBlogPost(req: Request, res: Response) {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const blog = await prisma.blogPost.update({
            where: { id: parseInt(id) },
            data: { title, content },
        });
        res.json(blog);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: "Failed to update blog post: " + error.message });
        } else {
            res.status(500).json({ error: "Failed to update blog post due to an unknown error" });
        }
    }
}

export async function deleteBlogPost(req: Request, res: Response) {
    const { id } = req.params;
    try {
        await prisma.blogPost.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: "Failed to delete blog post: " + error.message });
        } else {
            res.status(500).json({ error: "Failed to delete blog post due to an unknown error" });
        }
    }
}

export async function getBlogPostById(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const blogPost = await prisma.blogPost.findUnique({
            where: { id: parseInt(id) },
            include: {
                comments: {
                    select: {
                        comment: true,
                        createdAt: true,
                    },
                },
            },
        });

        if (!blogPost) {
            return res.status(404).json({ error: "Blog post not found" });
        }

        res.status(200).json(blogPost);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: "Failed to fetch blog post: " + error.message });
        } else {
            res.status(500).json({ error: "Failed to fetch blog post due to an unknown error" });
        }
    }
}

export const getBlogCategories = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.blogPost.findMany({
            select: {
                category: true,
            },
        });
        const uniqueCategories = Array.from(
            new Set(categories.map((c) => c.category))
        );
        res.status(200).json({
            categories: uniqueCategories,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: "Failed to fetch blog categories: " + error.message });
        } else {
            res.status(500).json({
                error: "Failed to fetch blog categories due to an unknown error",
            });
        }
    }
};
```

### `blogRouter.ts`
```typescript
import express from 'express';
import {
    getAllBlogPosts,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    getBlogPostById,
    getBlogCategories
} from '../controllers/blogController';

const router = express.Router();

router.get('/posts', getAllBlogPosts);
router.post('/posts', createBlogPost);
router.put('/posts/:id', updateBlogPost);
router.delete('/posts/:id', deleteBlogPost);
router.get('/posts/:id', getBlogPostById);
router.get('/categories', getBlogCategories);

export default router;
```

### `schema.prisma`
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id               Int       @id @default(autoincrement())
  first_name       String
  last_name        String
  email            String    @unique
  password         String
  resetToken       String?
  resetTokenExpiry DateTime?
  createdAt        DateTime  @default(now())
  reviews          Review[]
  Bookings         Bookings[]
}

model BlogPost {
  id          Int       @id @default(autoincrement())
  title       String
  category    String
  description String
  thumbnail   String
  content     String
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  comments    Comment[]
}

model Comment {
  id         Int      @id @default(autoincrement())
  comment    String
  createdAt  DateTime @default(now())
  blogPost   BlogPost @relation(fields: [blogPostId], references: [id])
  blogPostId Int
}
```

## Sources Used

**frontend/src/components/blog/BlogDetail.tsx (Lines 40-50)**

```tsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
```

This code is adapted from the React Router and React Query documentation as shown below:

```tsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
```

**frontend/src/components/blog/CommentForm.tsx (Lines 60-70)**

```tsx
const { addComment } = useComments(blogPostId);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newComment = { blogPostId, name, comment };
    await addComment(newComment);
    setName('');
    setComment('');
};
```

This code is adapted from the React Hook Form and React Query documentation as shown below:

```tsx
const { mutate } = useMutation(addComment);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate(newComment);
    setName('');
    setComment('');
};
```

**frontend/src/components/blog/CommentList.tsx (Lines 20-30)**

```tsx
const { data: comments = [], isLoading, error } = useComments(blogPostId);

if (isLoading) return <p>Loading comments...</p>;
if (error) return <p>Error loading comments: {error.message}</p>;

return (
    <div className="mt-8 mx-20 mx-auto">
        <h2 className="text-2xl font-bold mb-6">Reviews and Comments</h2>
        {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
            comments.map((comment, index) => (
                <div key={index} className="mb-6 p-4 shadow-lg rounded-lg bg-white">
                    <p className="text-lg font-semibold">{comment.name || 'Anonymous'}</p>
                    <p className="text-gray-400 text-sm">{format(new Date(comment.createdAt), 'PPP')}</p>
                    <p className="text-gray-800">{comment.comment}</p>
                </div>
            ))
        )}
    </div>
);
```

This code is adapted from the React Query and React documentation as shown below:

```tsx
const { data, isLoading, error } = useQuery(['comments', blogPostId], fetchComments);

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return (
    <div>
        {data.length === 0 ? (
            <p>No comments yet</p>
        ) : (
            data.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.comment}</p>
                </div>
            ))
        )}
    </div>
);
```

---

## Image Attribution

All tour images are randomly assigned to the tour from [Picsum](https://picsum.photos/).

## Authors

**Heli Desai** (heli.desai@dal.ca | hd123456@dal.ca)

## References
[1] “React,” React Blog RSS. [Online]. Available: https://react.dev/. [Accessed: 30-Jul-2024]  
[2] “Node.js web application framework,” Express. [Online]. Available: https://expressjs.com/. [Accessed: 30-Jul-2024]  
[3] P. G. D. Group, PostgreSQL, 28-Jul-2024. [Online]. Available: https://www.postgresql.org/. [Accessed: 30-Jul-2024]  
[4] Managed SQL database - amazon relational database service (RDS) - AWS. [Online]. Available: https://aws.amazon.com/rds/. [Accessed: 30-Jul-2024]  
[5] “Cloud run,” Google. [Online]. Available: https://cloud.google.com/run. [Accessed: 30-Jul-2024]  
[6] “Accelerated Container Application Development,” Docker, 08-Jul-2024. [Online]. Available: https://www.docker.com/. [Accessed: 30-Jul-2024]  
[7] “Scale & Ship Faster with a composable web architecture,” Netlify. [Online]. Available: https://www.netlify.com/. [Accessed: 30-Jul-2024]  
[8] “Vite,” vitejs. [Online]. Available: https://vitejs.dev/. [Accessed: 30-Jul-2024]  
[9] “JavaScript with syntax for types.,” TypeScript. [Online]. Available: https://www.typescriptlang.org/. [Accessed: 30-Jul-2024]



This section acknowledges the sources from which code snippets were adapted and provides context for their use in the project.
## Acknowledgments

The provided code was instrumental in getting started with the assignment. I would like to express my gratitude to all the authors for their hard work.
