'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { title: 'artist', url: '/artist' },
    { title: 'developer', url: '/developer' },
    { title: 'photographer', url: '/photographer' },
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
    '&:hover::after, &:focus::after, &.active::after': {
        opacity: 1,
        transform: 'scaleX(1)',
    },
};

const Header: React.FC = () => {
    const pathname = usePathname();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1, p: 2 }} gutterBottom={false}>
                    <Link href="/" style={{textDecoration: 'none'}}>
                    Dr. Chris Hengler
                    </Link>
                </Typography>
                <Box>
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        {navItems.map((item) => {
                            // Check if current path is in this section
                            const isActive =
                                item.url === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.url);

                            return (
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
                                        className={isActive ? 'active' : undefined}
                                    >
                                        {item.title}
                                    </Typography>
                                </Link>
                            );
                        })}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;