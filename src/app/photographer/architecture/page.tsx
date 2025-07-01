import { Typography } from "@mui/material";
import imagesJson from "./images.json";
import Gallery from "@/components/gallery";

const images = imagesJson.images;

function Page() {
    return (
        <>
            <Typography>
                I think all kinds of architecture have something to offer, from traditional 
                styles through brutalist apartment blocks and modern glass high-rise offices.
            </Typography>
            <Typography>
                This is the only section where I've dug up old photos from my time at university.
                The reason being that when putting this website together, I realised my eye for
                composition in architecture photos was much better 15 years ago than it is today. 
                I'll have to work on that.
            </Typography>
            <Gallery images={images} width={1500} height={1000} />
        </>
    )
}

export default Page;