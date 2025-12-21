import React from "react";
import Link from "next/link";
import drawingImagesJson from "./drawing/images.json";
import oilImagesJson from "./oil/images.json";
import watercolourImagesJson from "./watercolour/images.json";
import Typography from "@mui/material/Typography";
import RandomGallery from "@/components/randomGallery";

const drawingImages = drawingImagesJson.images;
const oilImages = oilImagesJson.images;
const watercolourImages = watercolourImagesJson.images;

export default function Page() {
  const allImages = drawingImages.concat(oilImages).concat(watercolourImages);

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
       in recent times have also started painting in oils, particularly for 
       more realistic bird portraiture. `}
      </Typography>
      <Typography>
        {`Whatever the medium, my art mostly focuses on architecture, 
      landscapes, and wildlife (by which I mostly mean birds).  Navigate
       through to each section to see some examples of my work. If you take
       a look at `}{" "}
        <Link href="/photographer">my photography section</Link>
        {` you may find the images some of these pieces are based on.`}
      </Typography>
      <RandomGallery
        allImages={allImages}
        count={6}
        width={1500}
        height={1000}
      />
    </>
  );
}
