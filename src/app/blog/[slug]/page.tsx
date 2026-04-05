"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogEntry } from "@/api";
import BlogEntry, { BlogEntryProps } from "@/components/blog_entry";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const [entry, setEntry] = useState<BlogEntryProps | null>(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await getBlogEntry(slug);
        setEntry(response.data);
      } catch (error) {
        console.error("Error fetching entry: ", error);
      }
    };

    fetchEntry();
  }, [slug]);

  if (!entry) return null;

  return <BlogEntry metadata={entry.metadata} body={entry.body} />;
}
