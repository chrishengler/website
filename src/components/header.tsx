"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MobileHeader from "./mobileHeader";
import DesktopHeader from "./desktopHeader";

const navItems = [
  { title: "artist", url: "/artist" },
  { title: "developer", url: "/developer" },
  { title: "photographer", url: "/photographer" },
  { title: "elsewhere", url: "/elsewhere" },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            <MobileHeader navItems={navItems} />
          ) : (
            <DesktopHeader navItems={navItems} />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
