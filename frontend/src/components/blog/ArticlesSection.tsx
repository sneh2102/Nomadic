import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const categories = [
  'All', 'Art and culture', 'Beaches', 'Adventure travel', 'Explore', 'Family holidays', 'Air travel', 'Food and drink'
];

const ArticlesSection: React.FC<{ onCategoryClick: (category: string | null) => void }> = ({ onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryClick(category === 'All' ? null : category);
  };

  return (
    <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
      <Typography variant="h4" component="h2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
        Travel articles
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: '#666', margin: '0.5rem 0 2rem' }}>
        Lorem ipsum is placeholder text commonly used in site.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryClick(category)}
            sx={{
              backgroundColor: selectedCategory === category ? '#2c3e50' : '#ecf0f1',
              color: selectedCategory === category ? 'white' : '#2c3e50',
              '&:hover': { backgroundColor: selectedCategory === category ? '#34495e' : '#bdc3c7' },
              border: 'none',
              boxShadow: 'none',
            }}
            disableRipple
          >
            {category}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ArticlesSection;
