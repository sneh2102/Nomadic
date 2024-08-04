// Author: Heli Desai
import React from 'react';
import BlogManager from '../../components/blog/ManageBlogPost';
import Navbar from '../../components/history/Navbar';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';

const BlogManagement: React.FC = () => {
  return (
    <>
    <Header/>
      <main>
        <BlogManager />
      </main>
      <Footer />
      </>
  );
};

export default BlogManagement;
