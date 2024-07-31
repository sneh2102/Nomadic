import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../components/blog/BlogDetail';
import MainLayout from '../components/blog/MainLayout';
import CommentList from '../components/blog/CommentList';
import CommentForm from '../components/blog/CommentForm';
import useBlogDetail from '../hooks/useBlogDetail';
import { useAuth } from '../Context/Context'; // Adjust the import path as needed

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogDetail, blogDetailLoading, blogDetailError } = useBlogDetail(id || '');

  if (blogDetailLoading) return <div className="text-center mt-10">Loading...</div>;

  // Handle error state
  if (blogDetailError) return <div className="text-center mt-10 text-red-500">Error loading blog</div>;

  return (
    <MainLayout>
      <main>
        <BlogDetails blogDetail={blogDetail} />
      </main>
    </MainLayout>
  );
};

export default BlogDetailsPage;
