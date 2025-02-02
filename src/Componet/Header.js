import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Main from './Main';
import { useHistory } from 'react-router-dom';
const pages = [
    {name : 'HOME', path:'/'}, 
    {name :'ABOUT', path:'/about'}, 
    {name :'SERICES', path:'/SERICES'}, 
    {name :'FEATURES', path:'/FEATURES'}, 
    // {name :'PRICING', path:'/PRICING'}, 
    {name :'CLINTS', path:'/CLINTS'}, 
    {name :'BLOG', path:'/BLOG'}, 
    {name : 'CONTACT US', path:'/CONTACT'}];
function Header() {
    const history = useHistory()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handlePageLink = (path) => {
        history.push(path)
        console.log(path)
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img width={'100px'} height={'30px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAlCAYAAADFsuJGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDFCQkI2NDMzMUFFOTExQTUxNDkyNzdGRTIzMDQ0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NkM5MDI5RTFBMzcxMUU5OEQzQ0RBOENBM0IxOTNGQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NkM5MDI5RDFBMzcxMUU5OEQzQ0RBOENBM0IxOTNGQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDFCQkI2NDMzMUFFOTExQTUxNDkyNzdGRTIzMDQ0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NDFCQkI2NDMzMUFFOTExQTUxNDkyNzdGRTIzMDQ0MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrqpE88AAAzoSURBVHja7FwJcFZFEn6BkCBnJJyygBAozgUERDQQV1QOWaGQmy1c5NAgN2jkUFHu04NVZFfQBYRVChXBCOzKLhiIAgKFggcCcixgIHIGyP1v9+43VZ2pN+9/7///JCz1d9VX+d+8eTPvzfR093T3JMLn81mFRPGEw4TzVpjCZKCIQmLAsoQjhFWEpPAwh6moGXAyYTbhGqEZ4Xh4qMNUVAxYk3CAEIvr9wiDwkMdpqJiwLcIieI6j9CB8GV4uMNU2Ax4N2EHIUor/xfhIUJ+MXxjV8K7hEA/NIKwlfAHD8+0xqJrSqhBiCbkEn4l/EzYjXG6GOS3VSXcS2hDqIXrUoRMwi+E7wgphK89tDmS8CLmKofQEfa8P7qL8DdCDMaMnx2A/iV9RmiF36mRIZzokoRXbZiP6QFCf8KaYmDAcoRqIZhofxQNJh0CD4A/OkNYSfgTfnshnsCnCL2EqeNEqViEqwk3/NStoH1vKRft1yOsJ9QWZUNtmM/CXKj5qBpKBkzAaj9quM+T87GLAQg1XbL+5w5yKwF55Zch1BFlOX6e6YDF1xrXLHm2EfYQThMywKBVCA0I7QmdCJMIfyQ8C+bwR7djczccC57HcjMYjL8xjZCFRVcdUok1z33ACHgltjr0kad9t8/F4vxEY77RhHcM9XML/GYVHCKUI5QmlDKgAv5aRYwShGhClEtw/dW+gtTTof0xhCzU24W6US7eqxlhlehjip/6zQn7UDeDMIdQ10U/PObdCDvwbA5hvEP9JPFO2YRGfuZ8hzZWU/28zy5Rd1soJWBbwlxtBekqZ5ALaRJqyodUcEudYC4oWgvJbUcswebg9xTCIkK2kFatIfEqw/5jd9ReSKqDGI/PCUsIs/DcbMPYboDqYuk1lnBI3G9I+C2kXiVCOuy2veg3mbCFMAFz9Aqk5IwgxjUSUluaG4vEd7ijEEiY/oREQiThW5+ZRqF+R8K0YpCEbqX4j+Kd0wm1DHUHok4WxkCVc/3FhNOGcfiV8LYmWVhC3cD9Plo/jQlncW8FtIySbE/aSCBJaYS3CPVEe70Imbg/OAgJuFzr6y8ux7iABAx2wsoQfiacx+/7Cfk2A7FXqKXtUAN1bkIGnKO99whDvdpgJKahorwH4d/i+d2ENwnTCa+Kb2e6rDHAMMH0DVBWAWPHtIYQgfLWGuMdJawkPE+YSJhF2AIGYvqF0E/0NQjllwj1A2DA+do4rYXpUuQM+IxobAbK1mgvxwzZGfceE+Xv32TM10rYckxfOAzqX1FnpaYJ8lD+IeEew7Ms0ZbZaAYLkpFpHa7fFe9SVkiwKyhnJuxOuM3QVyNITZ/NYlHv8J5HBnxWm9/NQioXKQNWw2pVdJXwGxjGGaJ8I+qX1lQ0M2b7m4T5ShJ2indjRmzpsHnIgfRQ6rkFvp/pJZd9DsMY5MAs4bLq0CZZkJxKZSsp9ahYJPM9bOrG4RlWvfeirCbhAvpv4ZIBn9CYbyektFUcDPimjapdpamyTEwYl02yqb9TqJXixEjtvWY71J2GOstEWTLK3vHY7xQ89w1MGAvqWtIQsQu+gLJJAXzjAiE1S6JsCcrmuGDAR4VK90GYVA3gPULCgM2E0ayr2/swmBlQKVy/Bla2HQ0oZuarLSbWh01IWYf6KajXDddtoHrP4Tu99M0bt/1orxfKGoix3YCyssIWXICJj/bYV0XCKbShNE8nXH8lBIFkwBx8091Cwiubs26A412AAUsEsP1mh+obhNKGsNXbcF4OxDaf+1gIV4QdvR6CSEUwtAguE0XjkMVjR5UQXuP7+1H2CL7xA8JZj33nIlmDqbvog53M1wnjUfYioh9fEFagz2yPfV0mvC/emekbOMkbGebnBhzYH8FtYyHE1x0hxaApED9gRcQW9xjul0JGzAYRCjsOJnSqn1YMzNeD0FtcMzNscqgfA7CP7RzKmuNvSoDvoJ5rgvmYhzGZjohMR/jvriLCwH68PwcY295JeEa8czr8s8pXed5G2HAIrzyuOarzmOaDLHIGLIcwi8nhXMIqmP9XDkHqHAcG/KkYmK8iwmeKePCfczFeEZBOeUJiKQkTCF3BX5Zu/Qj3E74l/B0hrkhgJuEeQjfC1CDCkjK2nYtviUAMWKcoLbafjEQKqzgYkLMtThHqw6tuos8gomtAJVWBxIwy1N+P2GgNTMa1ImLAlwh1xfUUF0kB+UIylAATKsYrE+B7VELseJXQGuMwhur9DsLsUeNeNsC+1HMXRQJJaaFudcoE01bHNSda7IMEDgm5tQFj8fHNsTI/MNTLxkQqRuyK1fyGQ9uTsQo5M2RwETEfh7ZGaeliy13aUVexWJTk+xF/2wT4LneC4SZikbMZ8E/Rbj4k3nWRFtU2wL7aiGQJFS6sCjvwnMFGfVy8SyTChr1DNhMet/DKQRqn7YoULdLcGvvgzK1EOGNTX+3yuuP6JKF8Ie96S2HXp+iGcBX5QwSiGz7hu3sA14eFK8XLLph34WPF91cXnoPL2InGoayfza7VLUqLMKMKDCTger9wzei74DvgPJc+3+vi+wvdDdNYc7n8DuXzNGbicE8Vwu1aHFR530dr9dmh2sQmhlzYceLx2nt47U+FoV4TDP01yp4P4H16E3Ix2Q+jrCthuIi3JolY9U8OcVzLRZbLAeHCUf7a1x38gI3FQrumxbRbFQUDfqxN2G6slhhNqo0xxAlPwgfFjLZHlC82MOalQowT14NUkc7U2zy20Rb+Tk4QiBUMoyZsoIe2honEgFHCX3cEjNYNfZ3EePP9viKW3MVlP32x4LmtR1AWIwRFe5eRkL4i3KjmNq4wGbCjwXk8HPdH4Po7JBs01MJwil5G/S5CWrJariwyPSStLiQGXK85zQNVIxs1k4Pxgmh7JrSB21zAceKeKk+BObLJpq9ZwnxIAtPa9ROL0KBdrt5clCV7jAXrUaODCMuGnAF1iSXpNBgoCmEkFc3YYKifIVKCtopQ0isOqUQdQsx8fbT2lwXRVnPYQSwNfi/KpwoJcQYqNBFq9nEsxK1QuWoce4vnp4tn64skiWtYMD0NDH8caVfD0V4i+j4tbLnnxLOdwVyZNmrUTTbMy9pY7vBgu7tmwOE+Z5or1FqkUEMmWg3DuSaM9aZabFGnVJeZxW7AdukJ0fYZPxLKDSYIWyhBlPPvf/gZC9YAC2Hg63HhTLFJUHhamCftRDnb45/76StZJCBYeF6FRScHkQ+4VOtno8v5KsCATqfi7oS/y1TBpzmQa8HPlO/g8jks7leDKyPP4ZDTkRBlULMbaKR2PiUUB6QWIzrBvstEEVZTLo8EuK7KIzP5CNxSXwlfXCyiH0PhxuIQ5oc2fb2GTOhzOEeyWdxrgZBZY7hWLiJakYr+FHGm91I44ZfijIhOSXgfdSaE3/8Hw/ysRWRE0Uq8mxPtEm6k7ZF+/FPxDgzCPrFj4n5VxBhNDMPlJ4TDMxqnunIN9VVcOT1IJnnYKnhOmf2Z6wyxbMthsWXbLMax+K4JcCT3QKhsL5zvTschOfIwAAeS4hCKHEb41FB/PBbxaPhY5yGOzrHZA4CJ7kIIbqCIv08Mclzz4COsjIVm4TrdU9s2fq7+wvZwomkiu7YM/FkZDvWXo35PGK2cR3bMof527LY7efDT2WGl1u5Z+OyOusQxqI2KDn0M0FxPm+AVSIAbowpsunbYSS7RTIL1HnaTE4VbLA2qsC/aro+NXUP0PVpsYpTpMcilu8bNoSQL36YfxZgSqA3YUdsdzjcwx/fQ941gUD+F+qMczibEYut/SdiPJrsxC21HYqu/LggGXO0LnjKw6XLqpwaM8xOG5+1S1zYjjd/rN7VERnmWTbt2AYKTyFi/w0Xbk7VnG7t4Jg59+AyZ3hL7ZD6otAFZp/Np/XYIOMfDdjmE0JOkXkjRYfSEam2BcFGqTVhqLOyl+VA5HF9siec+RYBdEh/WHgN1sxh2Ywe07ZXYduoTpLpJh5pxk3BQEXX5PG4zjF0ZnMw7j0SNVIT/vg/yverDxOBYeh3E3aNh5pzF3PGpu20ekiWeFskObB49aLn7zwitcUquPEyFXJz626bVS8bcW/+1hW0Oqih6EuWJNmcA1A5M0nSxxZd0CJKsIVwXPnHIRqWzZ2kqMgYSM01TyVYYtxbUj0oiW1bRKZRHi6zdbIj/CE2X+3BQpq6NP1CpmE9sVFC8zZZeie6FNqqkT3jSbk0GnGGwfWbi/oO4Vin2gw31V+B+U01qPWSonyIOOF1B+KkkbIpMm/o/eDyBFcb/AQM20eJ7kvJwX0mpOOx60hwM9i4igyYeO+SDDvWHiN1XP2TPbHGoPyM8cbcOWJW+gI1EnsHZ+BGycRUNRS5drsHZ/CU2EMrhzMb4AkP9CDizn0Dyo/JZLXfwP14gdLbCdEvQfwQYAH6CqScrPEfJAAAAAElFTkSuQmCC" alt="" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }, justifyContent: 'end',
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={() => handlePageLink(page.path)}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img width={'100px'} height={'30px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAlCAYAAADFsuJGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDFCQkI2NDMzMUFFOTExQTUxNDkyNzdGRTIzMDQ0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NkM5MDI5RTFBMzcxMUU5OEQzQ0RBOENBM0IxOTNGQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NkM5MDI5RDFBMzcxMUU5OEQzQ0RBOENBM0IxOTNGQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDFCQkI2NDMzMUFFOTExQTUxNDkyNzdGRTIzMDQ0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NDFCQkI2NDMzMUFFOTExQTUxNDkyNzdGRTIzMDQ0MyIvPiA8L3JkZjpEZXNjcmlwdGlv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" alt="" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => handlePageLink(page.path)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* < Main /> */}
        </>
    )
}

export default Header
