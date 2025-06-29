'use client'
import { Box, Paper, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface GalleryImageProps {
    imagePath: string;
    thumbnailPath: string;
    caption?: string;
};

interface GalleryProps {
    images: GalleryImageProps[];
    width: number;
    height: number;
}

const Gallery: React.FC<GalleryProps> = ({images, width, height}) => {
    const [selectedIdx, setSelectedIdx] = React.useState(0);

    const prevImage = () => setSelectedIdx(idx => (idx === 0 ? images.length - 1 : idx - 1));
    const nextImage = () => setSelectedIdx(idx => (idx === images.length - 1 ? 0 : idx + 1));

    return (
        <Paper sx={{p: 2}}>
            {images.length > 0 && (
            <>
                {/* Main image with navigation buttons */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={prevImage} aria-label="Previous image">
                        <NavigateBeforeIcon fontSize="large" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}>
                        <Image
                            src={images[selectedIdx].imagePath}
                            alt={images[selectedIdx].caption || "Gallery image"}
                            width={width}
                            height={height}
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                        <Typography variant="body1" align="center">{images[selectedIdx].caption}</Typography>
                    </Box>
                    <IconButton onClick={nextImage} aria-label="Next image">
                        <NavigateNextIcon fontSize="large" />
                    </IconButton>
                </Box>
                {/* Thumbnails with navigation buttons */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                    <IconButton onClick={prevImage} aria-label="Previous image (thumbnails)">
                        <NavigateBeforeIcon />
                    </IconButton>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        {images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img.thumbnailPath}
                                alt={img.caption || `Thumbnail ${idx + 1}`}
                                width={150}
                                height={100}
                                style={{
                                    cursor: "pointer",
                                    borderRadius: 4,
                                    border: idx === selectedIdx ? "2px solid #0f0f8a" : "1px solid #ccc",
                                    opacity: idx === selectedIdx ? 1 : 0.7,
                                    transition: "border 0.2s, opacity 0.2s"
                                }}
                                onClick={() => setSelectedIdx(idx)}
                            />
                        ))}
                    </Box>
                    <IconButton onClick={nextImage} aria-label="Next image (thumbnails)">
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            </>
            )}
        </Paper>
    );
};

export default Gallery;