import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography, Button, Grid, Paper, Box, Container,
  CircularProgress, Card, CardMedia, CardContent, Chip,
  styled, Avatar, Rating, ThemeProvider, createTheme
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TranslateIcon from '@mui/icons-material/Translate';
 
import axios from 'axios';
 
// Create a custom theme with the new primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#051036',
    },
  },
});
 
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  margin: theme.spacing(2, 0),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  borderRadius: '16px',
  overflow: 'hidden',
}));
 
const StyledCardMedia = styled(CardMedia)({
  height: 500,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
 
const OverlayContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(5, 16, 54, 0.6)', // Using the new color with opacity
  color: 'white',
  padding: theme.spacing(3),
}));
 
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(3),
  borderRadius: '16px',
  background: 'linear-gradient(145deg, #f3f3f3, #ffffff)',
}));
 
const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));
 
const FeatureIcon = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginRight: theme.spacing(2),
}));
 
interface TourPackage {
  id: number;
  name: string;
  location: string;
  city: string;
  price: number;
  image: string;
  freeCancelationAvailable: boolean;
  tourCategory: {
    name: string;
  };
}
 
export function TourDetail() {
  const { id } = useParams<{ id: string }>();
  const [tourPackage, setTourPackage] = useState<TourPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const fetchTourPackage = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/v1/tours/${id}`);
        setTourPackage(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tour package:', error);
        setError('Failed to fetch tour package data. Please try again later.');
        setLoading(false);
      }
    };
 
    fetchTourPackage();
  }, [id]);
 
  if (loading) {
    return (
<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
<CircularProgress />
</Box>
    );
  }
 
  if (error) {
    return (
<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
<Typography color="error">{error}</Typography>
</Box>
    );
  }
 
  if (!tourPackage) {
    return <Typography>No tour package data available.</Typography>;
  }
 
  return (
<ThemeProvider theme={theme}>
<Container maxWidth="lg">
<StyledCard>
<Box position="relative">
<StyledCardMedia
              image={tourPackage.image}
              title={tourPackage.name}
            />
<OverlayContent>
<Typography variant="h3" gutterBottom>
                {tourPackage.name}
</Typography>
<Box display="flex" alignItems="center" mb={2}>
<LocationOnIcon />
<Typography variant="h6" ml={1}>
                  {tourPackage.location}, {tourPackage.city}
</Typography>
</Box>
<Rating value={4.5} readOnly precision={0.5} />
</OverlayContent>
</Box>
<CardContent>
<Grid container spacing={3} alignItems="center">
<Grid item xs={12} md={6}>
<Box display="flex" alignItems="center">
<AttachMoneyIcon color="primary" fontSize="large" />
<Typography variant="h4" color="primary" ml={1}>
                    ${tourPackage.price}
</Typography>
<Typography variant="subtitle1" color="textSecondary" ml={1}>
                    / person
</Typography>
</Box>
</Grid>
<Grid item xs={12} md={6}>
<Box display="flex" justifyContent="flex-end">
<Chip
                    label={tourPackage.name}
                    color="primary"
                    variant="outlined"
                    sx={{ mr: 1 }}
                  />
                  {tourPackage.freeCancelationAvailable && (
<Chip
                      label="Free Cancellation"
                      color="success"
                      variant="outlined"
                    />
                  )}
</Box>
</Grid>
</Grid>
</CardContent>
</StyledCard>
 
        <Grid container spacing={4} mt={3}>
<Grid item xs={12} md={8}>
<StyledPaper>
<Typography variant="h5" gutterBottom color="primary">
                Tour Experience
</Typography>
<Typography variant="body1" paragraph>
                Embark on an unforgettable journey with our {tourPackage.name} tour. 
                Immerse yourself in the breathtaking beauty of {tourPackage.location}, {tourPackage.city} 
                as you explore its hidden gems and iconic landmarks.
</Typography>
<Typography variant="body1" paragraph>
                This meticulously crafted adventure combines awe-inspiring cultural experiences, 
                pristine natural wonders, and authentic local interactions. Prepare for an 
                extraordinary expedition that will create memories to last a lifetime.
</Typography>
<Button variant="contained" color="primary" size="large" startIcon={<SendIcon />}>
                Book Your Adventure Now
</Button>
</StyledPaper>
</Grid>
<Grid item xs={12} md={4}>
<StyledPaper>
<Typography variant="h5" gutterBottom color="primary">
                Tour Features
</Typography>
<FeatureBox>
<FeatureIcon>
<AccessTimeIcon />
</FeatureIcon>
<Box>
<Typography variant="subtitle1">Duration</Typography>
<Typography variant="body2">7 days of exploration</Typography>
</Box>
</FeatureBox>
<FeatureBox>
<FeatureIcon>
<GroupIcon />
</FeatureIcon>
<Box>
<Typography variant="subtitle1">Group Size</Typography>
<Typography variant="body2">Intimate group of max 12 people</Typography>
</Box>
</FeatureBox>
<FeatureBox>
<FeatureIcon>
<FitnessCenterIcon />
</FeatureIcon>
<Box>
<Typography variant="subtitle1">Difficulty</Typography>
<Typography variant="body2">Easy - suitable for all fitness levels</Typography>
</Box>
</FeatureBox>
<FeatureBox>
<FeatureIcon>
<TranslateIcon />
</FeatureIcon>
<Box>
<Typography variant="subtitle1">Languages</Typography>
<Typography variant="body2">English and Spanish guided tours</Typography>
</Box>
</FeatureBox>
</StyledPaper>
</Grid>
</Grid>
</Container>
</ThemeProvider>
  );
}
 
export default TourDetail;