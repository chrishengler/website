'use client'
import { Box, Typography, Select, MenuItem } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React from "react";

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

export const Subheader: React.FC<{ links: SubheaderLinkProps[], sectionTitle: string }> = ({ links, sectionTitle }) => {
    const pathname = usePathname();
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Find the currently selected link
    const selectedLink = links.find(link => pathname === link.url) || links[0];

    if (isMobile) {
        return (
            <>
            <Typography variant="h5">{sectionTitle}</Typography>
            <Box sx={{ width: '100%', display: 'flex', py: 1 }}>
                <Select
                    value={selectedLink.url}
                    onChange={e => router.push(e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: 180, fontWeight: 600, bgcolor: 'background.paper' }}
                    displayEmpty
                >
                    {links.map(link => (
                        <MenuItem key={link.url} value={link.url}>
                            {link.title}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            </>
        );
    }

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