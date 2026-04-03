"use client";

import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import { getBlogEntries } from "@/api";
import Blog, { BlogPreviewProps } from "@/components/blog_preview";

export default function Page() {
  const [entries, setEntries] = useState<BlogPreviewProps[]>([]);
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await getBlogEntries();
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching entries: ", error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <>
      <Typography variant="h4">Blog</Typography>
      <Typography>{`Behold my words. Or don't. It's up to you.`}</Typography>
      <List dense={true}>
        {entries.map((entry) => (
          <Blog
            key={entry.slug}
            title={entry.title}
            date={entry.date}
            preview={entry.preview}
            slug={entry.slug}
          />
        ))}
      </List>
    </>
  );
}
