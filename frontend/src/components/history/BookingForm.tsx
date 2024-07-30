import React from 'react';
import { Container, Paper, Typography, TextField, Button, Grid, Box, InputAdornment, ThemeProvider, createTheme } from '@mui/material';
import { DateRange, AttachMoney, Home, DirectionsCar, LocationCity, Image, Event, Notes } from '@mui/icons-material';
import axios from 'axios';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const theme = createTheme({
    palette: {
        primary: {
            main: '#051036',
        },
    },
});

type Booking = {
    startDate: string;
    endDate: string;
    duration: string;
    totalCost: string;
    bookingDate: string;
    accommodationDetails: string;
    transportationDetails: string;
    country: string;
    city: string;
    state: string;
    imgUrl: string;
    activities: string;
    note: string;
};

export function BookingForm() {
    const { control, handleSubmit, formState: { errors } } = useForm<Booking>();

    const onSubmit: SubmitHandler<Booking> = async (data) => {
        try {
            const response = await axios.post('/api/bookings', data);
            if (response.status === 201) {
                console.log('Booking created successfully:', response.data);
            } else {
                console.error('Failed to create booking:', response);
            }
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h4" gutterBottom color="primary"> New Booking </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="startDate"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Start Date is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Start Date"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DateRange color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            error={!!errors.startDate}
                                            helperText={errors.startDate ? errors.startDate.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="endDate"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'End Date is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="End Date"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DateRange color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            error={!!errors.endDate}
                                            helperText={errors.endDate ? errors.endDate.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="duration"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Duration is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Duration"
                                            error={!!errors.duration}
                                            helperText={errors.duration ? errors.duration.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="totalCost"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Total Cost is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Total Cost"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AttachMoney color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            error={!!errors.totalCost}
                                            helperText={errors.totalCost ? errors.totalCost.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="bookingDate"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Booking Date is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Booking Date"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Event color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            error={!!errors.bookingDate}
                                            helperText={errors.bookingDate ? errors.bookingDate.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="accommodationDetails"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Accommodation Details"
                                            multiline
                                            rows={2}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Home color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="transportationDetails"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Transportation Details"
                                            multiline
                                            rows={2}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DirectionsCar color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Controller
                                    name="country"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Country is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Country"
                                            error={!!errors.country}
                                            helperText={errors.country ? errors.country.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Controller
                                    name="city"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'City is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="City"
                                            error={!!errors.city}
                                            helperText={errors.city ? errors.city.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Controller
                                    name="state"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'State is required' }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="State"
                                            error={!!errors.state}
                                            helperText={errors.state ? errors.state.message : ''}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="imgUrl"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Image URL"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Image color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="activities"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Activities"
                                            multiline
                                            rows={3}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="note"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Note"
                                            multiline
                                            rows={3}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Notes color="primary" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Box mt={3}>
                            <Button type="submit" variant="contained" color="primary" size="large"> Submit Booking </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default BookingForm;
