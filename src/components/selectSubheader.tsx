"use client";
import { useRouter } from "next/router";
import { Box, MenuItem, Select } from "@mui/material";

export interface SubheaderLinkProps {
  title: string;
  url: string;
}

export const SelectSubheader: React.FC<{
  links: SubheaderLinkProps[];
  selectedLink: SubheaderLinkProps;
}> = ({ links, selectedLink }) => {
  const router = useRouter();

  return (
    <>
      <Box sx={{ width: "100%", display: "flex", py: 1 }}>
        <Select
          value={selectedLink.url}
          onChange={(e) => router.push(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minWidth: 180, fontWeight: 600, bgcolor: "background.paper" }}
          displayEmpty
        >
          {links.map((link) => (
            <MenuItem key={link.url} value={link.url}>
              {link.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default SelectSubheader;
