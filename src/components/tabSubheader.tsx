import { Box, Link, Typography } from "@mui/material";
import { navLinkSx } from "./navLinkSx";

export interface SubheaderLinkProps {
  title: string;
  url: string;
}

export const TabSubheader: React.FC<{
  links: SubheaderLinkProps[];
  selectedLink: SubheaderLinkProps;
}> = ({ links, selectedLink }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          width: "100%",
          justifyContent: "center",
        }}
      >
        {links.map((link) => {
          const isActive = selectedLink == link;
          return (
            <Link
              key={link.title}
              href={link.url}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h5"
                color="primary"
                sx={navLinkSx}
                className={isActive ? "active" : undefined}
              >
                {link.title}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default TabSubheader;
