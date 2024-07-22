import React from 'react'
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import About from './About';
function Main() {
    return (
        <>
            <Container className="container">
                <Grid container alignItems="center" spacing={2} sx={{ paddingTop: '20px' }} >
                    <Grid item xs={12} lg={6}>
                        <Box className="mt-40 home-2-content">
                            <Typography variant="h3" className="text-white fw-normal home-2-title display-4 mb-0" >
                                Make Your Marketing Real.
                            </Typography>
                            <Typography variant="body1" className="text-white-70 mt-4 f-15 mb-0" sx={{ marginTop: '20px',color:'grey' }}>
                                Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.
                            </Typography>
                            <Box mt={4} >
                                <Button variant="contained" className="btn btn-custom me-4" href="/zooki/react/" sx={{ backgroundColor: '#0d6efd', marginTop: '20px' }}>
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box className="mt-40 home-2-content position-relative">
                            <Box className="home-2-bottom-img">
                                <img src="https://themes.themesbrand.com/zooki/react/static/media/home-2-img.1c7314c691a2af56e41b.png" alt="Marketing Real Background" className="img-fluid d-block mx-auto" style={{ maxWidth: '100%', height: 'auto' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            {/* < About /> */}
        </>
    )
}

export default Main
