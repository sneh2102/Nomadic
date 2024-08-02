// TourList.jsx
import React from 'react';
import { Grid } from '@mui/material';
import { TourCard } from './TourCard';

export const TourList = ({ tours, onRemoveTour }) => {
  return (
    <Grid container spacing={2}>
      {tours.map((tour) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={tour.id}>
          <TourCard tour={tour} onRemove={onRemoveTour} />
        </Grid>
      ))}
    </Grid>
  );
};