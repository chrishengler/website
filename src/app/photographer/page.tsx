import { Typography } from "@mui/material";
import architectureImagesJson from "./architecture/images.json";
import landscapeImagesJson from "./landscape/images.json";
import wildlifeImagesJson from "./wildlife/images.json";
import RandomGallery from "@/components/randomGallery";

const architectureImages = architectureImagesJson.images;
const landscapeImages = landscapeImagesJson.images;
const wildlifeImages = wildlifeImagesJson.images;

function Page() {
  const allImages = architectureImages
    .concat(landscapeImages)
    .concat(wildlifeImages);
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
        {`I've continued shooting on and off ever since, now primarily using a 
                Nikon D7100 with a variety of second hand lenses (although the best camera,
                of course, is the one you happen to have with you - which may often be just
                my iPhone). My preferred subjects are mostly architecture, landscapes 
                (natural and human-influenced), wildlife, and perhaps especially the 
                intersections of those categories. `}
      </Typography>
      <Typography>
        {`I'm strictly an amateur and don't aim to produce work of a commercial 
                standard, but I'm very happy with some of the shots I have taken. 
                The gallery on this page shows a few images selected at random, additional 
                examples can be seen by navigating through to the pages for each 
                category.`}
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

export default Page;
