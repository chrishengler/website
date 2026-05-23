import EquipmentAccordion from "@/components/equipment_accordion";
import { Typography } from "@mui/material";

function Page() {
  return (
    <>
      <Typography variant="body1">
        {`Below you'll find a list of the main equipment I use when shooting, both digital and analogue.
        This doesn't cover every single piece of equipment I use, but all of my cameras and lenses plus some
        of the more interesting accessories. In time I hope to add a little more detail and some images.`}
      </Typography>
      <Typography variant="h4">Cameras</Typography>
      <EquipmentAccordion
        name="Nikon D7100"
        description="My first 'serious' camera, bought second hand in 2018 and
        one I still use to this day with a variety of lenses for all kinds of
        digital photography. Most images on this website were taken with this
        camera.  "
      />
      <EquipmentAccordion
        name="Praktica MTL5B"
        description="An East German SLR produced from 1985-1989. I purchased in
        reasonably good condition in late 2025. The shutter release is in a
        slightly odd position, although after adjusting to it I now find it very
        comfortable. Very satisfying clunk when fired."
      />
      <EquipmentAccordion
        name="Zeiss Ikon Nettar IIb 518/16"
        description="A medium format camera with a folding lens, produced from
        1949 to 1957.  Purchased in good condition in late 2025. By far the most
        basic of my cameras, but great fun to use once you understand its
        quirks."
      />
      <Typography variant="h4">Lenses</Typography>
      <EquipmentAccordion
        name="Nikkor 18-55mm"
        description="This came as the kit lens with my Nikon D7100. It's an
        unremarkable but solid choice for architecture or landscape photography,
        or everyday snapshots."
      />
      <EquipmentAccordion
        name="Nikkor 70-210mm"
        description="This was the first additional lens I bought after getting
        the D7100.  It worked well as a starter tool for widllife photography
        and produced some very nice images, but it's not a lens I reach for so
        often since picking up the Beroflex."
      />
      <EquipmentAccordion
        name="Beroflex 500mm f/8"
        description="This might not be the sharpest, fastest, or most modern
        lens around, but if you're looking for a narrow-angle lens and you can
        live with the limitations (manual focus only) there's not much that can
        compete with the 'Wundertüte' in terms of value-for-money. Purchased
        some time in 2020, it's been my go-to for birds and other wildlife ever
        since. With adaptor rings it can fit either the Nikon D7100 or my
        Praktica MTL5B and I've been very happy with the results on both."
      />
      <EquipmentAccordion
        name="Pentacon 50mm f/1.8"
        description="This lens was bought as a set with my Praktica MTL5B. It's
        very possibly the original lens sold with the camera in the 1980s. Opens
        up very wide to give lovely shallow focus."
      />
      <EquipmentAccordion
        name="Jupiter-11 135mm f/4"
        description="A Soviet-built lens purchased second-hand in late 2025 for
        use with my Praktica. I think this is actually an M39 mount with some
        sort of home-made M42 adaptor ring very firmly attached."
      />
      <Typography variant="h4">Accessories</Typography>
      <EquipmentAccordion
        name="Zeiss Ikon Ikophot"
        description="This is a selenium light-meter from the 1950s. It's a
        beautiful object to look at. I use it exclusively [whenever I take out
        my Nettar
        camera](https://www.lomography.com/homes/chrishengler/tags/25626-zeiss-ikon/photos)
        and I find it works very well despite its age."
      />
      <EquipmentAccordion
        name="Voigtländer external rangefinder"
        description="The tricky thing about using my Nettar is getting the focus
        right. You focus it by turning a dial on the lens, but the viewfinder
        doesn't look through the lens so you essentially have to just guess the
        distance to whatever you're looking at. That's where this comes in.  It
        has two incoming lenses, and a viewfinder which overlays the image from
        each on top of each other. By turning a dial until the object you're
        interested in lines up on both images, you can then read off the
        distance to that object."
      />{" "}
    </>
  );
}

export default Page;
