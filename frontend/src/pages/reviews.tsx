import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, Button, Container, Rating, TextField, Typography,
  Paper, Snackbar, Alert, CircularProgress, Fade,
  ThemeProvider, createTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

// Create a theme that matches the home page
const theme = createTheme({
  palette: {
    primary: {
      main: '#051036', // Purple color from the home page
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#6B7280', // Grey color for secondary text
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const StyledRatingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
}));

const ReviewForm: React.FC<{ tourPackageId: number ,userId:number }> = ({ tourPackageId ,userId }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8000/api/v1/reviews', {
        tourPackageId ,
        userId, // You might want to get this from user authentication
        rating,
        comment
      });
      console.log('Review submitted:', response.data);

      setSnackbar({
        open: true,
        message: 'Review submitted successfully!',
        severity: 'success',
      });
      setRating(null);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
      setSnackbar({
        open: true,
        message: 'Failed to submit review. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Fade in={true} timeout={1000}>
          <StyledPaper elevation={3}>
            <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
              <RateReviewIcon sx={{ fontSize: 48, color: 'primary.main' }} />
              <Typography variant="h4" component="h2" sx={{ mt: 2, color: 'text.primary' }}>
                Share Your Thoughts
              </Typography>
            </Box>
            <StyledForm onSubmit={handleSubmit}>
              <StyledRatingBox>
                <Typography component="legend" variant="h6" color="text.secondary">
                  How was your experience?
                </Typography>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={(_, newValue) => setRating(newValue)}
                  precision={1}
                  size="large"
                />
                <SentimentSatisfiedAltIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                {rating !== null && (
                  <Typography variant="body1" color="text.primary" fontWeight="bold">
                    {rating.toFixed(1)} / 5
                  </Typography>
                )}
              </StyledRatingBox>
              <TextField
                label="Your Review"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}
                sx={{
                  py: 1.5,
                  color: 'common.white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Submit Your Review'
                )}
              </Button>
            </StyledForm>
          </StyledPaper>
        </Fade>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
        
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default ReviewForm;