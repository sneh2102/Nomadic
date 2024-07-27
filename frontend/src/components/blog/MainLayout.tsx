import React from 'react';
import Navbar from '../ui/Header';
import Footer from '../ui/Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar showScrollAnimation={true}/>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
