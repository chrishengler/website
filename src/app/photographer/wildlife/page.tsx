import { Typography } from "@mui/material";
import imagesJson from "./images.json";
import Gallery from "@/components/gallery";

const images = imagesJson.images;

function Page() {
  return (
    <>
      <Typography>
        {`I've always found animals, and birds in particular, fascinating. So perhaps
                it's no surprise that wildlife is my favourite subject for photography.`}
      </Typography>
      <Gallery images={images} width={1500} height={1000} />
    </>
  );
}

export default Page;
