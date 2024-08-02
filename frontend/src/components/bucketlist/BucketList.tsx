// BucketList.jsx
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { TourList } from './TourList';

const initialTourData = [
    {
        "id": 3012,
        "name": "Adventure Activity in Tanzania 12",
        "location": "Serengeti National Park",
        "city": "Tanzania",
        "price": 51,
        "image": "https://picsum.photos/250?random=12",
        "freeCancelationAvailable": false,
        "tourCategoryId": 4,
        "accommodationDetails": "Accommodation Details for Adventure Activity 12",
        "transportationDetails": "Transportation Details for Adventure Activity 12",
        "activities": "Activities for Adventure Activity 12",
        "startDate": "2024-08-06T14:34:53.743Z",
        "endDate": "2024-08-07T14:34:53.743Z",
        "duration": 9,
        "createdAt": "2024-08-01T14:34:53.901Z",
        "updatedAt": "2024-08-01T14:34:53.901Z"
    },
    {
        "id": 3172,
        "name": "Adventure Activity in Tanzania 172",
        "location": "Serengeti National Park",
        "city": "Tanzania",
        "price": 202,
        "image": "https://picsum.photos/250?random=172",
        "freeCancelationAvailable": true,
        "tourCategoryId": 4,
        "accommodationDetails": "Accommodation Details for Adventure Activity 172",
        "transportationDetails": "Transportation Details for Adventure Activity 172",
        "activities": "Activities for Adventure Activity 172",
        "startDate": "2024-08-13T14:34:53.743Z",
        "endDate": "2024-08-15T14:34:53.743Z",
        "duration": 8,
        "createdAt": "2024-08-01T14:34:53.901Z",
        "updatedAt": "2024-08-01T14:34:53.901Z"
    },
    {
        "id": 3284,
        "name": "Adventure Activity in Tanzania 284",
        "location": "Serengeti National Park",
        "city": "Tanzania",
        "price": 542,
        "image": "https://picsum.photos/250?random=284",
        "freeCancelationAvailable": true,
        "tourCategoryId": 4,
        "accommodationDetails": "Accommodation Details for Adventure Activity 284",
        "transportationDetails": "Transportation Details for Adventure Activity 284",
        "activities": "Activities for Adventure Activity 284",
        "startDate": "2024-08-02T14:34:53.744Z",
        "endDate": "2024-08-05T14:34:53.744Z",
        "duration": 3,
        "createdAt": "2024-08-01T14:34:53.901Z",
        "updatedAt": "2024-08-01T14:34:53.901Z"
    },
    {
        "id": 3406,
        "name": "Adventure Activity in Tanzania 406",
        "location": "Serengeti National Park",
        "city": "Tanzania",
        "price": 558,
        "image": "https://picsum.photos/250?random=406",
        "freeCancelationAvailable": false,
        "tourCategoryId": 4,
        "accommodationDetails": "Accommodation Details for Adventure Activity 406",
        "transportationDetails": "Transportation Details for Adventure Activity 406",
        "activities": "Activities for Adventure Activity 406",
        "startDate": "2024-08-14T14:34:53.745Z",
        "endDate": "2024-08-16T14:34:53.745Z",
        "duration": 1,
        "createdAt": "2024-08-01T14:34:53.901Z",
        "updatedAt": "2024-08-01T14:34:53.901Z"
    },
    {
        "id": 3435,
        "name": "Adventure Activity in Tanzania 435",
        "location": "Serengeti National Park",
        "city": "Tanzania",
        "price": 278,
        "image": "https://picsum.photos/250?random=435",
        "freeCancelationAvailable": true,
        "tourCategoryId": 4,
        "accommodationDetails": "Accommodation Details for Adventure Activity 435",
        "transportationDetails": "Transportation Details for Adventure Activity 435",
        "activities": "Activities for Adventure Activity 435",
        "startDate": "2024-08-12T14:34:53.745Z",
        "endDate": "2024-08-15T14:34:53.745Z",
        "duration": 3,
        "createdAt": "2024-08-01T14:34:53.901Z",
        "updatedAt": "2024-08-01T14:34:53.901Z"
    }
  // Add more tour items here
];

export const BucketList = () => {
  const [tours, setTours] = useState(initialTourData);

  const handleRemoveTour = (tourId) => {
    setTours(prevTours => prevTours.filter(tour => tour.id !== tourId));
  };

  return (
    <Container maxWidth="lg" style={{paddingTop: "80px", minHeight:'90vh'}}>
      <Typography variant="h4" component="h4" gutterBottom  sx={{ my: 4 }}>
        My Travel Bucket List
      </Typography>
      <TourList tours={tours} onRemoveTour={handleRemoveTour} />
    </Container>
  );
};