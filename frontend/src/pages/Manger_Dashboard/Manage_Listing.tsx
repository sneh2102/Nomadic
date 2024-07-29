import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Button, TextField, Container, Box, Typography, IconButton, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ManagerDashboardsidebar from './Sidebar';
import { useFilter } from '../../Context/Context';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import {Tour} from './Add_Tours'
import axios from 'axios';


  const Manage_Listing: React.FC = () => {
  const [listings, setListings] = useState<Tour[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { filter } = useFilter();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [tourToDelete, setTourToDelete] = useState<Tour | null>(null);
  const [confirmationText, setConfirmationText] = useState('');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/tours');
        setListings(response.data.data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };
    fetchTours();
  }, []);

  const handleSaveToLocalStorage = (tours: Tour[]) => {
    localStorage.setItem('tours', JSON.stringify(tours));
  };

  const handleDeleteTour = (id: number) => {
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings);
    handleSaveToLocalStorage(updatedListings);
    setOpenDialog(false);
    setTourToDelete(null);
    setConfirmationText('');
  };

  const handleAddTourClick = () => {
    navigate('/manage/add-tour');
  };

  const handleRowClick = (id: number) => {
    navigate(`/manage/plan-details/${id}`);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteClick = (tour: Tour) => {
    setTourToDelete(tour);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setTourToDelete(null);
    setConfirmationText('');
  };

  const handleConfirmDelete = () => {
    if (tourToDelete && confirmationText === tourToDelete.name) {
      handleDeleteTour(tourToDelete.id);
    }
  };

  const filteredListings = listings.filter(listing => {
    const matchesSearchTerm =
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.activities.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.accomadationDetails.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.transportationDetails.toLowerCase().includes(searchTerm.toLowerCase())||
      listing.tourCategoryId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'active' && listing.freeCancelationAvailable) || (filter === 'inactive' && !listing.freeCancelationAvailable);
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <>
    <Header/>
    <Box sx={{ display: 'flex' , paddingTop: "70px"}}>
      <ManagerDashboardsidebar />
      <Container disableGutters sx={{ pt: 4, pb: 4, flexGrow: 1, minHeight: {xs: '75vh'}, color: 'black' }}>
        <CssBaseline />
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexDirection: { xs: 'column', md: 'row' }, p: 0, m: 0, width: '100%' }}>
            <Typography variant="h4">Manage Listings</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ borderRadius: 1, marginTop: { xs: 2, md: 0 } }}
              />
              <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddTourClick} sx={{ height: '100%', marginTop: { xs: 2, md: 0 } }}>
                Add Tour
              </Button>
            </Box>
          </Box>
          <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Cancelation</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredListings.map((listing, index) => (
                  <TableRow key={listing.id} hover onClick={() => handleRowClick(listing.id)} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                    <TableCell>{listing.name}</TableCell>
                    <TableCell>{listing.startDate}</TableCell>
                    <TableCell>{listing.endDate}</TableCell>
                    <TableCell>{listing.price}</TableCell>
                    <TableCell>{listing.city}</TableCell>
                    <TableCell>{listing.freeCancelationAvailable ? 'Yes' : 'No'}</TableCell>
                    <TableCell>
                      <IconButton onClick={(e) => { e.stopPropagation(); handleRowClick(listing.id); }} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={(e) => { e.stopPropagation(); handleDeleteClick(listing); }} color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To confirm deletion, please type the name of the tour: "{tourToDelete?.name}"
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Tour Name"
            fullWidth
            variant="outlined"
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary" disabled={confirmationText !== tourToDelete?.name}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    <Footer/>
    </>
  );
};

export default Manage_Listing;
