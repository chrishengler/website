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
      }}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
};

export default Markdown;
