import { Typography } from "@mui/material";
import imagesJson from "./images.json";
import Gallery from "@/components/gallery";

const images = imagesJson.images;

function Page() {
  return (
    <>
      <Typography>
        {`My drawings vary from extremely quick line sketches done on site,
        through more involved but still somewhat impressionistic mixed media
        pieces using pencil, ink, and water-soluble graphite, to much more 
        detailed pencil drawings aiming for a more realistic result.`}
      </Typography>
      <Gallery images={images} width={1500} height={1000} />
    </>
  );
}

export default Page;
