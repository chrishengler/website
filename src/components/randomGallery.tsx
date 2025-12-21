"use client";
import { useState, useEffect } from "react";
import Gallery from "@/components/gallery";
import getRandomElements from "@/utils/randomElements";

interface GalleryImage {
  imagePath: string;
  thumbnailPath: string;
  caption: string;
}

interface RandomGalleryProps {
  allImages: GalleryImage[];
  count: number;
  width: number;
  height: number;
}

export default function RandomGallery({
  allImages,
  count,
  width,
  height,
}: RandomGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const selectedImages = getRandomElements(allImages, count);
    setImages(selectedImages || []);
  }, [allImages, count]);

  return <Gallery images={images} width={width} height={height} />;
}
