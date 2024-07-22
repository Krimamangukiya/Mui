import { Box, Typography, Container, Grid, Avatar } from '@mui/material'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import React from 'react'
import LoopIcon from '@mui/icons-material/Loop';
// import Pricing from './Pricing';

function Featires() {
    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: '200' }}>
                    OUR FEATIRES
                </Typography>
                <Container className="container">
                    <Grid container alignItems="center" spacing={2} sx={{ paddingTop: '25px' }} >
                        <Grid item xs={12} lg={6}>
                            <Box className="mt-40 home-2-content">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <PublishedWithChangesIcon />
                                </Avatar>
                                <Typography variant="h5" className="text-white fw-normal home-2-title display-4 mb-0" sx={{ fontWeight: '200', textAlign: 'start', marginLeft: '15px' }} >
                                    Marketing Performance
                                </Typography>
                                <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px', textAlign: 'start', marginLeft: '15px', fontWeight: '200', color: 'gray' }}>
                                    Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.
                                </Typography>
                                <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px', textAlign: 'start', marginLeft: '15px', fontWeight: '300', color: 'gray' }}>
                                    Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.
                                </Typography>
                                <Box mt={4} >
                                    <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '10px', textAlign: 'start', marginLeft: '15px' }}>
                                        <span style={{ color: '#0d6efd' }}>Learn More</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box className="mt-40 home-2-content position-relative">
                                <Box className="home-2-bottom-img">
                                    <img src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png" alt="Marketing Real Background" className="img-fluid d-block mx-auto" style={{ maxWidth: '90%', height: 'auto' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container className="container">
                    <Grid container alignItems="center" spacing={2} sx={{ paddingTop: '25px' }} >
                        <Grid item xs={12} lg={6}>
                            <Box className="mt-40 home-2-content position-relative">
                                <Box className="home-2-bottom-img">
                                    <img src="https://themes.themesbrand.com/zooki/react/static/media/img-2.73bbfc3f31770042da4d.png" alt="Marketing Real Background" className="img-fluid d-block mx-auto" style={{ maxWidth: '90%', height: 'auto' }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box className="mt-40 home-2-content">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    < LoopIcon />
                                </Avatar>
                                <Typography variant="h5" className="text-white fw-normal home-2-title display-4 mb-0" sx={{ fontWeight: '200', textAlign: 'start', marginLeft: '15px' }} >
                                    Strategy Solutions
                                </Typography>
                                <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px', textAlign: 'start', marginLeft: '15px', fontWeight: '200', color: 'gray' }}>
                                    Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.
                                </Typography>
                                <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px', textAlign: 'start', marginLeft: '15px', fontWeight: '300', color: 'gray' }}>
                                    Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.
                                </Typography>
                                <Box mt={4} >
                                    <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '10px', textAlign: 'start', marginLeft: '15px' }}>
                                        <span style={{ color: '#0d6efd' }}>Learn More</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container className="container">
                    <Grid container alignItems="center" spacing={2} sx={{ paddingTop: '25px' }} >
                        <Grid item xs={12} lg={6}>
                            <Box className="mt-40 home-2-content">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <AlignVerticalBottomIcon />
                                </Avatar>
                                <Typography variant="h5" className="text-white fw-normal home-2-title display-4 mb-0" sx={{ fontWeight: '200', textAlign: 'start', marginLeft: '15px' }} >
                                    Marketing business
                                </Typography>
                                <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px', textAlign: 'start', marginLeft: '15px', fontWeight: '200', color: 'gray' }}>
                                    Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.
                                </Typography>
                                <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px', textAlign: 'start', marginLeft: '15px', fontWeight: '300', color: 'gray' }}>
                                    Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.
                                </Typography>
                                <Box mt={4} >
                                    <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '10px', textAlign: 'start', marginLeft: '15px' }}>
                                        <span style={{ color: '#0d6efd' }}>Learn More</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box className="mt-40 home-2-content position-relative">
                                <Box className="home-2-bottom-img">
                                    <img src="https://themes.themesbrand.com/zooki/react/static/media/img-3.1dbfd73268f019064e9f.png" alt="Marketing Real Background" className="img-fluid d-block mx-auto" style={{ maxWidth: '90%', height: 'auto' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
           {/* <Pricing/> */}
        </>
    )
}

export default Featires
