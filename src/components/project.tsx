import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

interface ProjectProps {
  name: string;
  language: string;
  link?: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  language,
  link,
  description,
}) => {
  const title = (
    <Typography variant="h5" component="span">
      {name}
    </Typography>
  );

  return (
    <Card variant="outlined" sx={{ mb: 2, width: "100%" }}>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          {link ? <Link href={link}>{title}</Link> : title}
          <Typography variant="body1" color="text.secondary" component="span">
            {language}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        {link && (
          <Link key={name} href={link}>
            <Typography variant="body2">View on GitHub</Typography>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default Project;
