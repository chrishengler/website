"use client";

import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";

export interface SentenceNode {
  POS: string;
  value: string;
  children: SentenceNode[];
}

interface SentenceTreeProps {
  node: SentenceNode;
  defaultExpanded?: boolean;
}

function SentenceTree({ node, defaultExpanded = false }: SentenceTreeProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (!expanded) {
    return (
      <Chip
        label={node.POS}
        onClick={() => setExpanded(true)}
        variant="outlined"
        clickable
      />
    );
  }

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        p: 1,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
        minWidth: 0,
      }}
    >
      <Chip
        label={node.POS}
        onClick={() => setExpanded(false)}
        variant="filled"
        color="primary"
        clickable
      />
      <Typography
        variant="body2"
        sx={{ fontStyle: "italic", textAlign: "center" }}
      >
        {node.value}
      </Typography>
      {node.children.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            mt: 0.5,
          }}
        >
          {node.children.map((child, idx) => (
            <SentenceTree key={idx} node={child} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default SentenceTree;
