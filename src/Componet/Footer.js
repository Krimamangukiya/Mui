import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

function Footer() {
    return (
        <>
            <section className="footer-bg">
                <Container>
                    <Grid container spacing={3} marginTop={10}>
                        <Grid item xs={12} lg={4}>
                            <div className="mb-5">
                                <Typography variant="body1" className="text-uppercase text-dark footer-title mb-4" sx={{ marginBottom: 4 }}>
                                    About Us
                                </Typography>
                                <Typography variant="body2" className="text-muted f-14" sx={{ color: 'grey' }}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem that is doloremque totam that laudantiume.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={4}>
                                    <div className="mb-5">
                                        <Typography variant="body1" className="text-uppercase text-dark footer-title mb-4">
                                            COMPANY
                                        </Typography>
                                        <ul className="list-unstyled footer-sub-menu" style={{ color: 'grey' }}>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Monitoring Grader
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Job Opening
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Customers
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Privacy
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <div className="mb-5">
                                        <Typography variant="body1" className="text-uppercase text-dark footer-title mb-4">
                                            SUPPORT
                                        </Typography>
                                        <ul className="list-unstyled footer-sub-menu" style={{ color: 'grey' }}>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Get Started
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Blog
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Knowledge Base
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <div className="mb-5">
                                        <Typography variant="body1" className="text-uppercase text-dark footer-title mb-4">
                                            LEGAL
                                        </Typography>
                                        <ul className="list-unstyled footer-sub-menu" style={{ color: 'grey' }}>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Terms & Conditions
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Customers
                                                </Link>
                                            </li>
                                            <li className="f-14" style={{ listStyle: 'none' }}>
                                                <Link href="/" color="inherit" className="text-muted" sx={{ textDecoration: 'none' }}>
                                                    Pricing
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Box component="section" sx={{ backgroundColor: 'black', color: 'white', padding: '15px', textAlign: 'center',marginTop:'100px' }}>
                <Container>
                    <Box component="div" className="row">
                        <Box component="div" className="text-center col-lg-12">
                            <Typography variant="body2" className="copyright text-white f-14 fw-light mb-0">
                                2024 © Zooki. Developed By Themesbrand
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Footer;
