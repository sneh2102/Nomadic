import React from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import aboutUs from '../assets/AboutUs.png';
import contactUs from '../assets/ContactUs.webp';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

const Section = styled('section')({
  padding: '2rem 0',
});

const AboutSection = styled(Section)({
  backgroundColor: '#f0f8ff',
});

const ContactSection = styled(Section)({
  backgroundColor: '#f5f5f5',
});

const GeneralInfoSection = styled(Section)({
  backgroundColor: '#f0f8ff',
});

const StyledTypography = styled(Typography)({
  fontFamily: 'Arial, sans-serif',
  fontWeight: 700,
  color: '#333',
});

const AboutUsText = styled(StyledTypography)({
  fontFamily: 'Georgia, serif',
  fontSize: '1.2rem',
  fontWeight: 400,
  color: '#444',
});

const ContactUsText = styled(StyledTypography)({
  fontFamily: 'Verdana, sans-serif',
  fontSize: '1.1rem',
  fontWeight: 400,
  color: '#555',
});

const AboutUsGrid = styled(Grid)({
  '@media (max-width: 900px)': {
    flexDirection: 'column-reverse',
  },
});

const ContactUsPage: React.FC = () => {
  return (
    <>
    <div className='h-[85px]'>
      <Header />
    </div>
    <Box>
      <AboutSection>
        <AboutUsGrid container spacing={4} className="px-20">
          <Grid item xs={12} md={6}>
            <StyledTypography variant="h4" gutterBottom>
              About Us
            </StyledTypography>
            <AboutUsText variant="body1">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis autem quibusdam minus obcaecati, tempora dolores temporibus ratione nisi amet possimus numquam provident voluptate consequuntur eveniet eligendi dicta vel voluptates neque soluta reiciendis a dignissimos sunt! Provident in minus perspiciatis, temporibus numquam veniam dolor facere accusamus voluptatibus</span> doloribus neque tenetur <br /> <br />saepe recusandae sapiente autem mollitia deserunt fuga officia asperiores. Similique consectetur aliquid ab hic beatae! Hic, voluptatibus vero iusto earum magni eum accusantium dolores quae? Sunt quaerat odit veritatis temporibus quos exercitationem eligendi, velit doloremque! Id, autem hic blanditiis dicta quia illum sint sit nobis ut dolorem.
            </AboutUsText>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={aboutUs} alt="About Us" style={{ width: '80%' }} />
          </Grid>
        </AboutUsGrid>
      </AboutSection>
      <ContactSection>
        <Grid container spacing={4} className="px-20">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={contactUs} alt="Contact Us" style={{ width: '60%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTypography variant="h4" gutterBottom>
              Contact Us
            </StyledTypography>
            <ContactUsText variant="body1">
              Please fill out the form below to contact us.
            </ContactUsText>
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </ContactSection>
      <GeneralInfoSection>
        <Box mt={4} className="px-20">
          <StyledTypography variant="h4" gutterBottom>
            General Info
          </StyledTypography>
          <ContactUsText variant="body1">
            For general inquiries, you can reach us at:
          </ContactUsText>
          <Box mt={2}>
            <ContactUsText variant="body1">
              Phone: (123) 456-7890
            </ContactUsText>
            <ContactUsText variant="body1">
              Email: info@company.com
            </ContactUsText>
            <ContactUsText variant="body1">
              Address: 1234 Street Name, City, State, Zip Code
            </ContactUsText>
          </Box>
        </Box>
      </GeneralInfoSection>
    </Box>
    <div className='mt-16'>
    <Footer />
    </div>
    
    </>
  );
};

export default ContactUsPage;
