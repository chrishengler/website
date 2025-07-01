'use client'
import { Box, Paper, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
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

    // Calculate aspect ratio as a percentage for padding-top
    const aspectRatio = (height / width) * 100;

    // Responsive thumbnail size
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const thumbWidth = isMobile ? 60 : 150;
    const thumbHeight = isMobile ? 40 : 100;
    const buttonFontSize = isMobile? "small" : "large";

    return (
        <>
            {images.length > 0 && (
            <>
                {/* Main image with navigation buttons */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={prevImage} aria-label="Previous image">
                        <NavigateBeforeIcon fontSize={buttonFontSize} />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, maxWidth: width, minWidth: 0 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                paddingTop: `${aspectRatio}%`,
                            }}
                        >
                            <Image
                                src={images[selectedIdx].imagePath}
                                alt={images[selectedIdx].caption || "Gallery image"}
                                fill
                                style={{
                                    objectFit: "contain",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    display: "block"
                                }}
                                sizes="(max-width: 1000px) 100vw, 1000px"
                            />
                        </Box>
                        <Box>
                        <Typography align="center" sx={{ color: "text.secondary" }}>
                            {images[selectedIdx].caption}
                        </Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={nextImage} aria-label="Next image">
                        <NavigateNextIcon fontSize={buttonFontSize}/>
                    </IconButton>
                </Box>

                {/* Thumbnails with navigation buttons */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1,
                            overflowX: "auto",
                            maxWidth: "100%",
                        }}
                    >
                        {images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img.thumbnailPath}
                                alt={img.caption || `Thumbnail ${idx + 1}`}
                                width={thumbWidth}
                                height={thumbHeight}
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
                </Box>
            </>
            )}
        </>
    );
};

export default Gallery;