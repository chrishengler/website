import React, { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { BlogPreviewProps } from "@/components/blog_preview";

export interface BlogEntryProps {
  metadata: BlogPreviewProps;
  body: string;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ metadata, body }) => {
  const [bodyHtml, setBodyHtml] = useState<string>("");

  useEffect(() => {
    remark()
      .use(html, { sanitize: true })
      .process(body)
      .then((result) => setBodyHtml(String(result)));
  }, [body]);

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
          <Box
            sx={{
              mt: 2,
              "& p, & ul, & ol, & blockquote, & pre": { marginBottom: "1em" },
              "& ul, & ol": {
                paddingLeft: "1.5em",
                listStylePosition: "outside",
              },
              "& h1, & h2, & h3, & h4, & h5, & h6": {
                marginTop: "1.5em",
                marginBottom: "0.5em",
              },
              "& a": {
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              },
            }}
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogEntry;
