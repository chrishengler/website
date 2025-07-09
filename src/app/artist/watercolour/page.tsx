import { Typography } from "@mui/material";
import imagesJson from "./images.json";
import Gallery from "@/components/gallery";

const images = imagesJson.images;

function Page() {
  return (
    <>
      <Typography>
        {`I never got along with watercolours at school, but after coming back to
        art as an adult I realised that was simply because nobody ever bothered 
        teaching us how to actually use them. Now I find them a very satisfying medium
        for all kinds of subjects.`}
      </Typography>
      <Gallery images={images} width={1500} height={1000} />
    </>
  );
}

export default Page;
