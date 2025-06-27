'use client'
import { Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

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


export interface SubheaderLinkProps {
    title: string;
    url: string;
}

export const Subheader: React.FC<{ links: SubheaderLinkProps[] }> = ({ links }) => {
    const pathname = usePathname();

    return (
        <Box sx={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'center'}}>
            {links.map(link => {
                const isActive = pathname === link.url;
                return (
                    <Link key={link.title} href={link.url} style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h5"
                            color="primary"
                            sx={navLinkSx}
                            className={isActive ? 'active' : undefined}
                        >
                            {link.title}
                        </Typography>
                    </Link>
                );
            })}
        </Box>
    );
};

export default Subheader;