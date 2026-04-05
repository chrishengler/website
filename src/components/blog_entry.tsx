import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { BlogPreviewProps } from "@/components/blog_preview";
import Markdown from "./markdown";

export interface BlogEntryProps {
  metadata: BlogPreviewProps;
  body: string;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ metadata, body }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2, width: "100%" }}>
      <CardContent>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h4" component="span">
              {metadata.title}
            </Typography>
            <Typography variant="body2">{metadata.date}</Typography>
          </Box>
          <Typography variant="body1">{metadata.preview}</Typography>
          <Divider />
          <Markdown content={body} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogEntry;
