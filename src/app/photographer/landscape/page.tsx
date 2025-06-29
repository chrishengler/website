import Gallery from "@/components/gallery";
import { Typography } from "@mui/material";
import imagesJson from "./images.json";

const images = imagesJson.images;

function Page() {
    return (
        <>
            <Typography>
                The cheat code for stunning landscape photography is "go to Iceland".
            </Typography>
            <Gallery images={images} width={1500} height={1000} />
        </>
    )
}

export default Page;