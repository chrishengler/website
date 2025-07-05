"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  url: string;
}

interface DesktopHeaderProps {
  navItems: NavItem[];
}

const navLinkSx = {
  position: "relative",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "currentColor",
    opacity: 0,
    transform: "scaleX(0)",
    transition: "opacity 0.3s, transform 0.3s",
  },
  "&:hover::after, &:focus::after, &.active::after": {
    opacity: 1,
    transform: "scaleX(1)",
  },
};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      {navItems.map((item) => {
        const isActive =
          item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);

        return (
          <Link
            key={item.title}
            href={item.url}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={navLinkSx}
              tabIndex={0}
              className={isActive ? "active" : undefined}
            >
              {item.title}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
};

export default DesktopHeader;
