"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navItems = [
  // { title: 'artist', url: '/artist' },
  { title: "developer", url: "/developer" },
  { title: "photographer", url: "/photographer" },
  { title: "elsewhere", url: "/elsewhere" },
];

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

const Header: React.FC = () => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, p: 2 }}
          gutterBottom={false}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            Chris Hengler
          </Link>
        </Typography>
        <Box>
          {isMobile ? (
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
                    item.url === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.url);
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
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => {
                const isActive =
                  item.url === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.url);

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
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
