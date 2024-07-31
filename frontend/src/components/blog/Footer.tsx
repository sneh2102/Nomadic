import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#0D2857',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <Typography variant="h6" component="p">
        Contact us on
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
        <IconButton component={Link} href="mailto:example@example.com" sx={{ color: 'white' }}>
          <EmailIcon />
        </IconButton>
        <IconButton component={Link} href="https://www.facebook.com" target="_blank" sx={{ color: 'white' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton component={Link} href="https://www.instagram.com" target="_blank" sx={{ color: 'white' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton component={Link} href="https://www.linkedin.com" target="_blank" sx={{ color: 'white' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
