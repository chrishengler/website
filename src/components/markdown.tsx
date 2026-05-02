"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

export interface MarkdownProps {
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const [bodyHtml, setBodyHtml] = useState<string>("");

  useEffect(() => {
    remark()
      .use(html, { sanitize: true })
      .process(content)
      .then((result) => setBodyHtml(String(result)));
  }, [content]);

  return (
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
        "& code": {
          fontSize: "inherit",
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          padding: "0.15em 0.4em",
          borderRadius: "4px",
        },
        "& pre": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          padding: "1em",
          borderRadius: "4px",
          overflowX: "auto",
          "& code": {
            backgroundColor: "transparent",
            padding: 0,
          },
        },
      }}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
};

export default Markdown;
