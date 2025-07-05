"use client";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  url: string;
}

interface MobileHeaderProps {
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

const MobileHeader: React.FC<MobileHeaderProps> = ({ navItems }) => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open navigation"
        onClick={handleMenuOpen}
        edge="end"
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {navItems.map((item) => {
          const isActive =
            item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);
          return (
            <MenuItem
              key={item.title}
              onClick={handleMenuClose}
              selected={isActive}
              sx={{ px: 3 }}
            >
              <Link
                href={item.url}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                  display: "block",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={navLinkSx}
                  className={isActive ? "active" : undefined}
                >
                  {item.title}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MobileHeader;
