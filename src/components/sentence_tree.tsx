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

const CONNECTOR_HEIGHT = 20;

function SentenceTree({ node, defaultExpanded = false }: SentenceTreeProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (!expanded && node.children.length > 0) {
    return (
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          px: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {node.value}
        </Typography>
        <Chip
          label={node.POS}
          onClick={() => setExpanded(true)}
          variant="outlined"
          clickable
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
        px: 1,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {node.value}
      </Typography>
      <Chip
        label={node.POS}
        onClick={
          node.children.length > 0 ? () => setExpanded(false) : undefined
        }
        variant="filled"
        color="primary"
        clickable={node.children.length > 0}
      />
      {node.children.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            "& > .gi-child": {
              position: "relative",
              pt: `${CONNECTOR_HEIGHT}px`,
              px: 1,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: "50%",
                width: "50%",
                height: `${CONNECTOR_HEIGHT}px`,
                borderTop: "2px solid",
                borderRight: "2px solid",
                borderColor: "divider",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "50%",
                width: "50%",
                height: `${CONNECTOR_HEIGHT}px`,
                borderTop: "2px solid",
                borderColor: "divider",
              },
              "&:first-of-type::before": {
                borderTop: "none",
              },
              "&:last-of-type::after": {
                borderTop: "none",
              },
              "&:only-child::before": {
                borderTop: "none",
              },
            },
          }}
        >
          {node.children.map((child, idx) => (
            <Box key={idx} className="gi-child">
              <SentenceTree node={child} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default SentenceTree;
