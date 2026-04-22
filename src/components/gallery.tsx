"use client";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InfoIcon from "@mui/icons-material/Info";
import Equipment from "./equipment";

interface GalleryImageProps {
  imagePath: string;
  thumbnailPath: string;
  caption?: string;
  camera?: string;
  lens?: string;
  film?: string;
}

interface GalleryProps {
  images: GalleryImageProps[];
  width: number;
  height: number;
}

const Gallery: React.FC<GalleryProps> = ({ images, width, height }) => {
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [infoOpen, setInfoOpen] = React.useState(false);

  const prevImage = () =>
    setSelectedIdx((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  const nextImage = () =>
    setSelectedIdx((idx) => (idx === images.length - 1 ? 0 : idx + 1));

  // Calculate aspect ratio as a percentage for padding-top
  const aspectRatio = (height / width) * 100;

  // Responsive thumbnail size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const thumbWidth = isMobile ? 60 : 150;
  const thumbHeight = isMobile ? 40 : 100;
  const buttonFontSize = isMobile ? "small" : "large";
  const borderColour = theme.palette.background.default;

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [images.length]);

  const stripColour = theme.palette.background.thumbnailStrip;

  return (
    <Box sx={{ p: 2, bgcolor: "background.gallery", borderRadius: 4 }}>
      {images.length > 0 && (
        <>
          {/* Main image with navigation buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
            }}
          >
            <Box
              onClick={prevImage}
              role="button"
              aria-label="Previous image"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  prevImage();
                }
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 1,
                cursor: "pointer",
                transition: "background-color 0.2s, color 0.2s",
                "&:hover, &:focus-visible": {
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.4)",
                },
                color: "primary.contrastText",
                outline: "none",
                ml: -2,
              }}
            >
              <NavigateBeforeIcon
                fontSize={buttonFontSize}
                sx={{ color: "primary.contrastText" }}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                maxWidth: width,
                minWidth: 0,
                bgcolor: "background.gallery",
              }}
            >
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
                    display: "block",
                  }}
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
                <IconButton
                  onClick={() => setInfoOpen((o) => !o)}
                  aria-label={infoOpen ? "Hide image info" : "Show image info"}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 1,
                    backgroundColor: "background.gallery",
                    color: "primary.contrastText",
                  }}
                >
                  <InfoIcon fontSize="small" />
                </IconButton>
                {infoOpen && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "background.gallery",
                      color: "primary.contrastText",
                      p: 2,
                    }}
                  >
                    {images[selectedIdx].caption && (
                      <Typography
                        align="center"
                        sx={{
                          color: "inherit",
                          lineHeight: 1.5,
                          mb: images[selectedIdx].camera ? 1 : 0,
                        }}
                      >
                        {images[selectedIdx].caption}
                      </Typography>
                    )}
                    {images[selectedIdx].camera && (
                      <Equipment
                        camera={images[selectedIdx].camera}
                        lens={images[selectedIdx].lens}
                        film={images[selectedIdx].film}
                      />
                    )}
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              onClick={nextImage}
              role="button"
              aria-label="Next image"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  nextImage();
                }
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 1,
                cursor: "pointer",
                transition: "background-color 0.2s, color 0.2s",
                "&:hover, &:focus-visible": {
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.4)",
                },
                color: "primary.contrastText",
                outline: "none",
                mr: -2,
              }}
            >
              <NavigateNextIcon
                fontSize={buttonFontSize}
                sx={{ color: "inherit" }}
              />
            </Box>
          </Box>

          {/* Thumbnails with navigation buttons */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
              mx: -2,
              mb: -2,
              bgcolor: "background.thumbnailStrip",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              p: 2,
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 48,
                pointerEvents: "none",
                zIndex: 1,
                borderBottomLeftRadius: 16,
                background: `linear-gradient(to right, ${stripColour}, transparent)`,
                opacity: canScrollLeft ? 1 : 0,
                transition: "opacity 0.25s",
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: 48,
                pointerEvents: "none",
                zIndex: 1,
                borderBottomRightRadius: 16,
                background: `linear-gradient(to left, ${stripColour}, transparent)`,
                opacity: canScrollRight ? 1 : 0,
                transition: "opacity 0.25s",
              }}
            />
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                gap: 2,
                overflowX: "auto",
                maxWidth: "100%",
                p: 1,
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
                    outline: `2px solid ${borderColour}`,
                    outlineOffset: idx === selectedIdx ? 2 : 0,
                    opacity: idx === selectedIdx ? 1 : 0.7,
                    transition: "outline-offset 0.2s, opacity 0.2s",
                  }}
                  onClick={() => setSelectedIdx(idx)}
                />
              ))}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Gallery;
