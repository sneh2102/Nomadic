import React from 'react';
import BlogDetails from "../components/blog/BlogDetail";
import MainLayout from '../components/blog/MainLayout';
import CommentList from "../components/blog/CommentList";
import CommentForm from "../components/blog/CommentForm";


const Blog: React.FC = () => {
  return (
    <MainLayout>
      <main>
        <BlogDetails />
          <CommentForm />
      </main>
    </MainLayout>
  );
};

export default Blog;
