// src/components/BlogManagement.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Button, Typography, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Pagination
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useBlog  from '../../hooks/useBlogs';

const BlogManagement = () => {


  const { blogs = [], blogsLoading, blogsError } = useBlog({
     page: null,
        category: null,
        pageSize: null
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [confirmationText, setConfirmationText] = useState('');
  const navigate = useNavigate();

  const handleAddBlogClick = () => navigate('/manage/add-blog');
  const handleEditClick = (id) => navigate(`/managenage/edit-blog/${id}`);

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setOpenDialog(true);
  };

  const handleConfirmDelete = async () => {
    // if (blogToDelete && confirmationText === blogToDelete.name) {
    //   const response = await deleteBlog(blogToDelete.id);
    //   if (response.success) {
    //     fetchBlogs();
    //     setOpenDialog(false);
    //     setBlogToDelete(null);
    //     setConfirmationText('');
    //   }
    // }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setBlogToDelete(null);
    setConfirmationText('');
  };

  if (blogsLoading) return <div>Loading...</div>;
  if (blogsError) return <div>Error loading blog</div>;
  return (
    <>
      <Button startIcon={<AddIcon />} onClick={handleAddBlogClick}>
        Add Blog
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map(blog => (
              <TableRow key={blog.id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.createdAt}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(blog.id)}><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDeleteClick(blog)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={totalPages} onChange={(event, page) => fetchBlogs(page)} />

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>To confirm deletion, type the name of the blog: "{blogToDelete?.name}"</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Confirm Blog Name"
            fullWidth
            value={confirmationText}
            onChange={e => setConfirmationText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleConfirmDelete} disabled={confirmationText !== blogToDelete?.name}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BlogManagement;
