import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Container,
    Typography,
    Paper,
    List,
    ListItem,
    Rating,
    Divider,
    Avatar,
    Fade,
    ThemeProvider,
    createTheme,
    IconButton,
    Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from 'react-router-dom';

// Create a custom black and white theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#051036',
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
            secondary: '#424242',
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 700,
        },
    },
});

interface Review {
    id: number;
    name: string;
    rating: number;
    review: string;
    createdAt: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[100]} 100%)`,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(3),
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    '&:hover': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[4],
    },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.text.primary,
}));

const ReviewList: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const navigate = useNavigate();  // Use useNavigate hook

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/getreviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <ThemeProvider theme={theme}>
        
            <Container maxWidth="md">
                <Fade in={true} timeout={1000}>
                    <StyledPaper elevation={3}>
                        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
                            <Box display="flex" width="100%" alignItems="center" justifyContent="space-between">
                                <Typography variant="h4" component="h2" sx={{ mt: 2, color: 'text.primary', fontWeight: 700 }}>
                                    Customer Reviews
                                </Typography>
                                <Box display="flex" alignItems="center">
                                    <Typography variant="h6" sx={{ mr: 2, color: 'text.primary' }}>
                                        Add Comment
                                    </Typography>
                                    <Tooltip title="Add Review" arrow>
                                        <IconButton 
                                            onClick={() => navigate('/reviews')} 
                                            color="primary"
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Box>
                        <List>
                            {reviews.map((review, index) => (
                                <React.Fragment key={review.id}>
                                    {index > 0 && <Divider component="li" />}
                                    <StyledListItem>
                                        <Box display="flex" alignItems="center" width="100%" mb={2}>
                                            <StyledAvatar>{review.name.charAt(0).toUpperCase()}</StyledAvatar>
                                            <Box flexGrow={1}>
                                                <Typography variant="h6" component="span">
                                                    {review.name}
                                                </Typography>
                                                <Rating value={review.rating} readOnly precision={0.5} sx={{ ml: 2 }} />
                                            </Box>
                                            <Typography variant="caption" color="text.secondary">
                                                {new Date(review.createdAt).toLocaleDateString()}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            color="text.primary"
                                            sx={{
                                                fontStyle: 'italic',
                                                mb: 2,
                                                pl: 2,
                                                borderLeft: (theme) => `4px solid ${theme.palette.grey[300]}`,
                                            }}
                                        >
                                            "{review.review}"
                                        </Typography>
                                    </StyledListItem>
                                </React.Fragment>
                            ))}
                        </List>
                    </StyledPaper>
                </Fade>
            </Container>
        </ThemeProvider>
    );
};

export default ReviewList;
