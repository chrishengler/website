"use client";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { SelectSubheader } from "./selectSubheader";
import { TabSubheader } from "./tabSubheader";

export interface SubheaderLinkProps {
  title: string;
  url: string;
}

export const Subheader: React.FC<{
  links: SubheaderLinkProps[];
  sectionTitle: string;
}> = ({ links, sectionTitle }) => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Find the currently selected link
  const selectedLink = links.find((link) => pathname === link.url) || links[0];

  return (
    <>
      {isMobileOrTablet && (
        <Typography variant="h5">{"/" + sectionTitle}</Typography>
      )}
      {isMobile ? (
        <SelectSubheader links={links} selectedLink={selectedLink} />
      ) : (
        <TabSubheader links={links} selectedLink={selectedLink} />
      )}
    </>
  );
};

export default Subheader;
