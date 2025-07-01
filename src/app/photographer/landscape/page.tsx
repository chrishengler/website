import Gallery from "@/components/gallery";
import { Typography } from "@mui/material";
import imagesJson from "./images.json";

const images = imagesJson.images;

function Page() {
    return (
        <>
            <Typography>
                For most people, 'landscape' tends to mean the natural landscape, and 
                that is the focus of most of these shots. But I'm also a big fan of the
                human-influenced landscape, such as my shot of Barcelona from the top of 
                Tibidabo, and that of the Paris skyline. Some might say they belong in 
                the architecture section, but for me they wouldn't belong there - the
                scale, and therefore the focus, is completely different.
            </Typography>
            <Gallery images={images} width={1500} height={1000} />
        </>
    )
}

export default Page;