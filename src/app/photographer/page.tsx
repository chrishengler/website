import { Typography } from "@mui/material";
import imagesJson from "./images.json";
import Gallery from "@/components/gallery";

const images = imagesJson.images;

function Page() {
    return (
        <>
            <Typography>
                {`I developed an interest in photography during my time at university,
                when I attempted Project 365 with a Ricoh R8 compact camera. I didn't
                make it to the end of the year, but I think my 182 days was a reasonable
                effort and it definitely helped me to find themes and compositions that
                work for me.`}
            </Typography>
            <Typography>
                I'm raw text and should be escaped or encapsulated as a string
            </Typography>
            <Typography>
                {`I've continued shooting on and off ever since, now primarily using a 
                Nikon D7100 with a variety of second hand lenses (although the best camera,
                of course, is the one you happen to have with you - which may often be just
                my iPhone). My preferred subjects are mostly architecture, landscapes 
                (natural and human-influenced), wildlife, and perhaps especially the 
                intersections of those categories. `}
            </Typography>
            <Typography>
                {`I'm strictly an amateur and don't aim to produce work of a commercial 
                standard, but I'm very happy with some of the shots I have taken. A few
                of my favourites are shown in the gallery on this page, additional 
                examples can be seen on the other pages in this category.`}
            </Typography>
            <Gallery images={images} width={1500} height={1000} />
        </>
    )
}

export default Page;