import React from 'react';
import { Box, Container, Grid, TextField, Button, Typography, List, Link } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from './Footer';
function Contact() {
    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: '200', mb: 5 }}>
                    OUR CONTACT
                </Typography>
            </Box>
            <Box className="contact-box p-5" sx={{ mt: 7 }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={8}>
                            <Box className="custom-form p-3">
                                <form name="myForm">
                                    <p id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                id="name"
                                                name="name"
                                                label="Name"
                                                placeholder="Enter your name"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                id="email"
                                                name="email"
                                                label="Email"
                                                placeholder="Enter your email"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="subject"
                                                name="subject"
                                                label="Subject"
                                                placeholder="Enter subject"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="comments"
                                                name="comments"
                                                label="Message"
                                                placeholder="Enter your message"
                                                multiline
                                                rows={5}
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sx={{color:'#0d6efd'}}>
                                            <Button
                                                type="submit"
                                                id="submit"
                                                name="send"
                                                variant="contained"
                                                className="submitBnt"
                                                fullWidth
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Box className="contact-content p-3">
                                <div className="contact-details" style={{ display: 'flex' }}>
                                    <div className="float-start contact-icon me-3 mt-2">
                                        <HeadphonesIcon />
                                    </div>
                                    <div className="app-contact-desc text-muted pt-1" style={{ color: 'grey', marginLeft: '10px' }}>
                                        <Typography variant="subtitle1" className="info-title">
                                            Call:
                                        </Typography>
                                        <Typography variant="body2" className="mb-0">
                                            012-345-6789
                                        </Typography>
                                    </div>
                                </div>

                                <div className="contact-details mt-2" style={{ display: 'flex' }} >
                                    <div className="float-start contact-icon me-3 mt-2">
                                        <MailIcon />
                                    </div>
                                    <div className="app-contact-desc text-muted pt-1" style={{ color: 'grey', marginLeft: '10px' }}>
                                        <Typography variant="subtitle1" className="info-title">
                                            Email:
                                        </Typography>
                                        <Typography variant="body2" className="mb-0">
                                            <Link href="mailto:youremailid@gmail.com" className="text-muted" sx={{ color: 'grey', textDecoration: 'none' }}>
                                                youremailid@gmail.com
                                            </Link>
                                        </Typography>
                                    </div>
                                </div>

                                <div className="contact-details mt-2" style={{ display: 'flex' }}>
                                    <div className="float-start contact-icon me-3 mt-2">
                                        <LocationOnIcon />
                                    </div>
                                    <div className="app-contact-desc text-muted pt-1" style={{ color: 'grey', marginLeft: '10px' }}>
                                        <Typography variant="subtitle1" className="info-title">
                                            Location:
                                        </Typography>
                                        <Typography variant="body2" className="mb-0">
                                            <Link href="/" className="text-muted" sx={{ color: 'grey', textDecoration: 'none' }}>
                                                3179 Raccoon Run Seattle, WA 98109
                                            </Link>
                                        </Typography>
                                    </div>
                                </div>

                                <div className="follow mt-4">
                                    <Typography variant="h6" className="text-dark mb-3">
                                        Follow
                                    </Typography>
                                    <Link sx={{ color: 'grey' }}><FacebookIcon /></Link>
                                    <Link sx={{ color: 'grey', marginLeft: '10px' }}><TwitterIcon /></Link>
                                    <Link sx={{ color: 'grey', marginLeft: '10px' }}><GoogleIcon /></Link>
                                    <Link sx={{ color: 'grey', marginLeft: '10px' }}><LinkedInIcon /></Link>
                                    <Link sx={{ color: 'grey', marginLeft: '10px' }}><WhatsAppIcon /></Link>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* <Footer /> */}
        </>
    );
}

export default Contact;

