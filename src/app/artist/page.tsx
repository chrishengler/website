import React from "react";
import drawingImagesJson from "./drawing/images.json";
import oilImagesJson from "./oil/images.json";
import watercolourImagesJson from "./watercolour/images.json";
import Typography from "@mui/material/Typography";
import Gallery from "@/components/gallery";
import getRandomElements from "@/utils/randomElements";

const drawingImages = drawingImagesJson.images;
const oilImages = oilImagesJson.images;
const watercolourImages = watercolourImagesJson.images;

export default function Page() {
  const images = (getRandomElements(drawingImages, 2) ?? [])
    .concat(getRandomElements(oilImages, 2) ?? [])
    .concat(getRandomElements(watercolourImages, 2) ?? []);
  images.sort(() => 0.5 - Math.random());

  return (
    <>
      <Typography variant="body1">
        {`As a child I loved drawing, but after finding the AS-Level art
      curriculum restrictive I got frustrated and dropped the subject
      both at school and in my free time.`}
      </Typography>
      <Typography>
        {`I took up art again as a hobby in my thirties. My drawings 
        range from quick sketches on-site with fine liners to relatively 
        detailed pencil illustrations, and everything in between. I often 
        use pencil, ink and water-soluble graphite within one piece.`}
      </Typography>
      <Typography>
        {`I have also been painting with watercolours for several years, and
       in recent times have also started painting in oils. `}
      </Typography>
      <Typography>
        {`Whatever the medium, my art mostly focuses on architecture, 
      landscapes, and wildlife (by which I mostly mean birds).  Navigate
       through to each section to see some examples of my work.`}
      </Typography>
      <Gallery images={images} width={1500} height={1000} />
    </>
  );
}
