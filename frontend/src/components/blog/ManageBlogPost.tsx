import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  Box, Button, Container, TextField, Typography, Grid, MenuItem, Select, FormControl, InputLabel,
  SelectChangeEvent
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SaveIcon from '@mui/icons-material/Save';
import useBlog from '../../hooks/useBlogs';


const categories = ['Travel', 'Food', 'Lifestyle', 'Fashion', 'Fitness', 'Health', 'Technology', 'Business', 'Entertainment', 'Sports'];

export interface BlogPost {
  id?: number;
  title: string;
  content: string;
  category: string;
  thumbnail_url: string;
  description: string;
}

const BlogManager: React.FC = () => {
  const URL = import.meta.env.VITE_BASE_API_URL;
  const navigate = useNavigate();
  const {addBlogMutation} = useBlog({
    page: null,
    category: null,
    pageSize: null
  });
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: '',
    content: '',
    category: '',
    thumbnail_url: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const name = event.target.name as keyof typeof blogPost;
    setBlogPost({
      ...blogPost,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await addBlogMutation.mutateAsync({
        title: blogPost.title,
        content: blogPost.content,
        category: blogPost.category,
        description: blogPost.description,
        thumbnail: blogPost.thumbnail_url,
        userId: 1,
      })
      toast.success('Blog post created/updated successfully');
      navigate('/manage/blog');
    } catch (error) {
      console.error("Failed to create/update blog post:", error);
      toast.error('Failed to create/update blog post. Please try again.');
    }
  };
  return (
    <>
    <Container component="main" maxWidth="md">
      <Box sx={{pt: 20, mb: 20 }}>
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
            <TextField
              fullWidth
              required
              id="thumbnail_url"
              label="Thumbnail URL"
              name="thumbnail_url"
              value={blogPost.thumbnail_url}
              onChange={handleChange}
            />
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
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default BlogManager;
