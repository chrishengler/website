import React, { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";

export interface BlogPreviewProps {
  title: string;
  date: string;
  preview: string;
  slug: string;
}

const Blog: React.FC<BlogPreviewProps> = ({ title, date, preview, slug }) => {
  const [previewHtml, setPreviewHtml] = useState<string>("");

  useEffect(() => {
    remark()
      .use(html, { sanitize: true })
      .process(preview)
      .then((result) => setPreviewHtml(String(result)));
  }, [preview]);

  const title_element = (
    <>
      <Typography variant="h5" component="span">
        {title}
      </Typography>
      <Typography variant="h6">{date}</Typography>
    </>
  );

  return (
    <Card variant="outlined" sx={{ mb: 2, width: "100%" }}>
      <CardContent>
        <Box>
          {title_element}
          <Box
            sx={{ mt: 2 }}
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />
          <Link href={`/blog/${slug}`}>Read more</Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Blog;
