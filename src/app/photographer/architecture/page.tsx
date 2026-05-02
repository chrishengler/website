import { Typography } from "@mui/material";
import imagesJson from "./images.json";
import Gallery from "@/components/gallery";

const images = imagesJson.images;

function Page() {
  return (
    <>
      <Typography>
        {`I think all kinds of architecture have something to offer, from traditional 
                styles through brutalist apartment blocks and modern glass high-rise offices. `}
      </Typography>
      <Gallery images={images} width={1500} height={1000} />
    </>
  );
}

export default Page;
