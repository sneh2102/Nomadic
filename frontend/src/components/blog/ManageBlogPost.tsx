import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import {
  Box, Button, Container, TextField, Typography, Grid, MenuItem, Select, FormControl, InputLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import useBlogCategories from '../../hooks/useBlogCategories';
import Header from '../ui/Header';
import Footer from '../ui/Footer';


const categories = ['Travel', 'Food', 'Lifestyle', 'Fashion', 'Fitness', 'Health', 'Technology', 'Business', 'Entertainment', 'Sports'];

export interface BlogPost {
  id?: number;
  title: string;
  content: string;
  category: string;
  thumbnail: string;
  description: string;
}

const BlogManager: React.FC = () => {
  const URL = import.meta.env.VITE_BASE_API_URL;
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: '',
    content: '',
    category: '',
    thumbnail: '',
    description: '',
  });

  useEffect(() => {
    const fetchBlogPost = async (id: number) => {
      try {
        const response = await axios.get(`${URL}/api/v1/blogPosts/${id}`);
        setBlogPost(response.data);
      } catch (error) {
        console.error('Failed to fetch blog post', error);
      }
    };

    // Uncomment and replace 123 with actual ID to fetch when needed
    // fetchBlogPost(123);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  import { SelectChangeEvent } from '@mui/material';
  
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const name = event.target.name as keyof typeof blogPost;
    setBlogPost({
      ...blogPost,
      [name]: event.target.value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogPost({ ...blogPost, thumbnail: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${URL}/api/v1/blogPosts`, blogPost);
      toast.success('Blog post created successfully!');
      navigate('/blog');
    } catch (error) {
      console.error("Failed to create/update blog post:", error);
      toast.error('Failed to create/update blog post. Please try again.');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${URL}/api/v1/blogPosts/${id}`);
      toast.success('Blog post deleted successfully!');
      navigate('/blog');
    } catch (error) {
      console.error("Failed to delete blog post:", error);
      toast.error('Failed to delete blog post. Please try again.');
    }
  };

  return (
    <>
    <Container component="main" maxWidth="md">
      <Box sx={{ mt: 10, mb: 20 }}>
        <Typography variant="h4" gutterBottom>
          Manage Blog Post
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="title"
              label="Title"
              name="title"
              value={blogPost.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="description"
              label="Description"
              name="description"
              value={blogPost.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={blogPost.category}
                onChange={handleSelectChange}
              >
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="content"
              label="Content"
              name="content"
              multiline
              rows={4}
              value={blogPost.content}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label" style={{ background: "#2F365F", color: 'white' }}>
              Upload Thumbnail
              <input type="file" hidden onChange={handleFileChange} />
              <PhotoCamera style={{ marginLeft: '10px' }} />
            </Button>
            {blogPost.thumbnail && (
              <Box mt={2}>
                <img src={blogPost.thumbnail} alt="Thumbnail" style={{ width: "100%", height: '300px', objectFit: "contain" }} />
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={() => handleSubmit()}
              fullWidth
              style={{ background: "#2F365F", color: 'white' }}
            >
              Save Blog Post
            </Button>
          </Grid>
          {blogPost.id && (
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(blogPost.id)}
                fullWidth
                style={{ background: "#D32F2F", color: 'white' }}
              >
                Delete Blog Post
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default BlogManager;
