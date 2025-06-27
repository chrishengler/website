'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0f0f8a',
            contrastText: '#dcdcdc',
        },
        secondary: {
            main: '#629f51',
            contrastText: '#082744'
        },
        text: {
            primary: '#0f0f8a',
            secondary: '#444',
        },
        background: {
            default: '#eee',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: 'var(--font-didact-gothic)',
        h1: { fontFamily: 'var(--font-urbanist)' },
        h2: { fontFamily: 'var(--font-urbanist)' },
        h3: { fontFamily: 'var(--font-urbanist)' },
        h4: { fontFamily: 'var(--font-urbanist)' },
        h5: { fontFamily: 'var(--font-urbanist)' },
        h6: { fontFamily: 'var(--font-urbanist)' },
    },
    cssVariables: true,
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '& a': {
                        textDecoration: 'underline',
                    },
                },
            },
            defaultProps: {
                gutterBottom: true,
            },
        },
    },
});

export default theme;
