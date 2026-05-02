import architectureImagesJson from "./architecture/images.json";
import landscapeImagesJson from "./landscape/images.json";
import wildlifeImagesJson from "./wildlife/images.json";
import RandomGallery from "@/components/randomGallery";
import Markdown from "@/components/markdown";

const architectureImages = architectureImagesJson.images;
const landscapeImages = landscapeImagesJson.images;
const wildlifeImages = wildlifeImagesJson.images;

const content: string = `I developed an interest in photography during my time
at university, when I attempted Project 365 with a Ricoh R8 compact camera. I
didn't make it to the end of the year, but I think my 182 days was a reasonable
effort and it definitely helped me to find themes and compositions that work for
me.

I continued shooting on and off until in 2018 I got a little more serious about
it and picked up my first 'serious' camera, a Nikon D7100, and started learning
more about the technical aspects of photography. My preferred subjects are
mostly architecture, landscapes (natural and human-influenced), wildlife, and
perhaps especially the intersections of those categories. Since late 2025 I've
also been shooting analogue photography, on both 35mm and medium format film.

The gallery below shows a random assortment of images, if you'd like to see 
a wider selection you can click through to the various categories via the
menu. Hit the 'i' button in the gallery to open an overlay with a little
information about each photo, and the equipment used to take it.`;

function Page() {
  const allImages = architectureImages
    .concat(landscapeImages)
    .concat(wildlifeImages);
  return (
    <>
      <Markdown content={content} />
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
