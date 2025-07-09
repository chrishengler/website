import { Typography } from "@mui/material";
import imagesJson from "./images.json";
import Gallery from "@/components/gallery";

const images = imagesJson.images;

function Page() {
  return (
    <>
      <Typography>
        {`I only started using oils in 2024, but have quickly become very 
        fond of the medium. The process can be very time consuming, but I 
        find the results extremely satisfying.`}
      </Typography>
      <Gallery images={images} width={1500} height={1000} />
    </>
  );
}

export default Page;
