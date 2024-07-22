import React from 'react';
import { Grid, Card, CardContent, Typography, Link, Box, Avatar } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import PaletteIcon from '@mui/icons-material/Palette';
import InsightsIcon from '@mui/icons-material/Insights';
import HexagonIcon from '@mui/icons-material/Hexagon';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Featires from './Featires';

function Service() {
    console.log('Service');
    return (
        <>
            <Box sx={{ mt: 15 }}>
                <Typography variant="h4" sx={{ fontSize: '30px', fontWeight: '200', mb: 7, textAlign: 'center' }}>
                    OUR SERVICE
                </Typography>
                <Grid container spacing={2} marginTop={'15px'}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className="service-box rounded mt-4">
                            <CardContent className="p-4">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <StorageIcon />
                                </Avatar>
                                <div className="services-desc" style={{ marginLeft: '10px' }}>
                                    <div className="service-title mb-2 position-relative">
                                        <Typography variant="h6" className="fw-normal mb-3">
                                            <Link href="/zooki/react/" className="text-dark" sx={{ textDecoration: 'none', color: 'black' }}>Awesome Support</Link>
                                        </Typography>
                                    </div>
                                    <Typography variant="body1" className="text-muted mb-3 f-14" sx={{ color: 'gray' }}>
                                        Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.
                                    </Typography>
                                    <Typography variant="body1" className="mb-0 text-uppercase f-13">
                                        <Link href="/zooki/react/" className="text-primary" sx={{ textDecoration: 'none' }}>Learn more</Link>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className="service-box rounded mt-4">
                            <CardContent className="p-4">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <PaletteIcon />
                                </Avatar>
                                <div className="services-desc" style={{ marginLeft: '10px' }}>
                                    <div className="service-title mb-2 position-relative">
                                        <Typography variant="h6" className="fw-normal mb-3">
                                            <Link href="/zooki/react/" className="text-dark" sx={{ textDecoration: 'none', color: 'black' }}>Unlimited Colors</Link>
                                        </Typography>
                                    </div>
                                    <Typography variant="body1" className="text-muted mb-3 f-14" sx={{ color: 'gray' }}>
                                        Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.
                                    </Typography>
                                    <Typography variant="body1" className="mb-0 text-uppercase f-13">
                                        <Link href="/zooki/react/" className="text-primary" sx={{ textDecoration: 'none' }}>Learn more</Link>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className="service-box rounded mt-4">
                            <CardContent className="p-4">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <InsightsIcon />
                                </Avatar>
                                <div className="services-desc" style={{ marginLeft: '10px' }}>
                                    <div className="service-title mb-2 position-relative">
                                        <Typography variant="h6" className="fw-normal mb-3">
                                            <Link href="/zooki/react/" className="text-dark" sx={{ textDecoration: 'none', color: 'black' }}>Strategy Solutions</Link>
                                        </Typography>
                                    </div>
                                    <Typography variant="body1" className="text-muted mb-3 f-14" sx={{ color: 'gray' }}>
                                        Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.
                                    </Typography>
                                    <Typography variant="body1" className="mb-0 text-uppercase f-13">
                                        <Link href="/zooki/react/" className="text-primary" sx={{ textDecoration: 'none' }}>Learn more</Link>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className="service-box rounded mt-4">
                            <CardContent className="p-4">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <TravelExploreIcon />
                                </Avatar>
                                <div className="services-desc" style={{ marginLeft: '10px' }}>
                                    <div className="service-title mb-2 position-relative">
                                        <Typography variant="h6" className="fw-normal mb-3">
                                            <Link href="/zooki/react/" className="text-dark" sx={{ textDecoration: 'none', color: 'black' }}>Digital Design</Link>
                                        </Typography>
                                    </div>
                                    <Typography variant="body1" className="text-muted mb-3 f-14" sx={{ color: 'gray' }}>
                                        Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.
                                    </Typography>
                                    <Typography variant="body1" className="mb-0 text-uppercase f-13">
                                        <Link href="/zooki/react/" className="text-primary" sx={{ textDecoration: 'none' }}>Learn more</Link>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className="service-box rounded mt-4">
                            <CardContent className="p-4">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <KeyboardCommandKeyIcon />
                                </Avatar>
                                <div className="services-desc" style={{ marginLeft: '10px' }}>
                                    <div className="service-title mb-2 position-relative">
                                        <Typography variant="h6" className="fw-normal mb-3">
                                            <Link href="/zooki/react/" className="text-dark" sx={{ textDecoration: 'none', color: 'black' }}>Easy to customize</Link>
                                        </Typography>
                                    </div>
                                    <Typography variant="body1" className="text-muted mb-3 f-14" sx={{ color: 'gray' }}>
                                        Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.
                                    </Typography>
                                    <Typography variant="body1" className="mb-0 text-uppercase f-13">
                                        <Link href="/zooki/react/" className="text-primary" sx={{ textDecoration: 'none' }}>Learn more</Link>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card className="service-box rounded mt-4">
                            <CardContent className="p-4">
                                <Avatar sx={{ bgcolor: '#0d6efd', width: 50, height: 50, mb: 1, ml: 1 }}>
                                    <HexagonIcon />
                                </Avatar>
                                <div className="services-desc" style={{ marginLeft: '10px' }}>
                                    <div className="service-title mb-2 position-relative">
                                        <Typography variant="h6" className="fw-normal mb-3">
                                            <Link href="/zooki/react/" className="text-dark" sx={{ textDecoration: 'none', color: 'black' }}>Truly Multipurpose</Link>
                                        </Typography>
                                    </div>
                                    <Typography variant="body1" className="text-muted mb-3 f-14" sx={{ color: 'gray' }}>
                                        Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.
                                    </Typography>
                                    <Typography variant="body1" className="mb-0 text-uppercase f-13">
                                        <Link href="/zooki/react/" className="text-primary" sx={{ textDecoration: 'none' }}>Learn more</Link>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            {/* < Featires /> */}
        </>
    );
}

export default Service;
