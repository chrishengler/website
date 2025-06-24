import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

const navItems = [
    { title: 'developer', url: '/developer' },
    { title: 'art', url: '/art' },
    { title: 'elsewhere', url: '/elsewhere' },
];

const navLinkSx = {
    position: 'relative',
    cursor: 'pointer',
    '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '2px',
        backgroundColor: 'currentColor',
        opacity: 0,
        transform: 'scaleX(0)',
        transition: 'opacity 0.3s, transform 0.3s',
    },
    '&:hover::after, &:focus::after': {
        opacity: 1,
        transform: 'scaleX(1)',
    },
};

const Header: React.FC = () => (
        <AppBar position="static">
        <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Link href="/" passHref style={{ textDecoration: 'none' }}>
                    <Typography
                        variant="h3"
                        sx={navLinkSx}
                        style={{ width: 'fit-content' }}
                    >
                        Dr. Chris Hengler
                    </Typography>
                </Link>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.url}
                                passHref
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={navLinkSx}
                                    tabIndex={0}
                                >
                                    {item.title}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
);

export default Header;