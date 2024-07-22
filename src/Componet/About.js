import React from 'react';
import { Box, Grid, Typography, Avatar, Container } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DvrIcon from '@mui/icons-material/Dvr';
import NatureIcon from '@mui/icons-material/Nature';
import Servise from './Servise';
function About() {
    console.log('Hello');
    // alert('Hello')
    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: '200', mb: 5 }}>
                    ABOUT US
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 3 }}>
                            <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mx: 'auto', mb: 2 }}>
                                <LightbulbOutlinedIcon />
                            </Avatar>
                            <Typography variant="h6" gutterBottom>
                                Creative Design
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'gray' }}>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 3 }}>
                            <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mx: 'auto', mb: 2 }}>
                                <DvrIcon />
                            </Avatar>
                            <Typography variant="h6" gutterBottom>
                                Strategy Solutions
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'gray' }}>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 3 }}>
                            <Avatar sx={{ bgcolor: '#0d6efd', width: 48, height: 48, mx: 'auto', mb: 2 }}>
                                <NatureIcon />
                            </Avatar>
                            <Typography variant="h6" gutterBottom>
                                Dynamic Growth
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'gray' }}>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Container className="container">
                <Grid container alignItems="center" spacing={2} sx={{ paddingTop: '100px' }} >
                    <Grid item xs={12} lg={6}>
                        <Box className="mt-40 home-2-content">
                            <Typography variant="h4" className="text-white fw-normal home-2-title display-4 mb-0" sx={{ fontWeight: '200' }} >
                                Performancect Solution For Small Businesses
                            </Typography>
                            <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px', color: 'gray' }}>
                                Temporibus autem quibusdam a aut officiis debitis rerum necessitatibus saepeeveniet ut et voluptates repudiandae sint a molestiae recusandae itaque earum rerum hic tenetur a sapiente delectus ut at aut reiciendis voluptatibus maiores alias consequatur perferendis doloribus asperiores rerum necessitat saepeeveniet.
                            </Typography>
                            <Box mt={4} >
                                <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px' }}>
                                    Learn More <span style={{ color: '#0d6efd' }}>About Us</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box className="mt-40 home-2-content position-relative">
                            <Box className="home-2-bottom-img">
                                <img src="https://themes.themesbrand.com/zooki/react/static/media/about-img.cb735e1c0599d2b5739c.jpg" alt="Marketing Real Background" className="img-fluid d-block mx-auto" style={{ maxWidth: '90%', height: 'auto' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* < Servise /> */}
        </>
    );
}

export default About;
