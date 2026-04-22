import Markdown from "@/components/markdown";

const content = `
Below you'll find an overview of my photography equipment - cameras,
lenses, and some of the more interesting accessories.

### Cameras
#### Nikon D7100
My first 'serious' camera, bought second hand in 2018 and one I still use to
this day with a variety of lenses for all kinds of digital photography. Most
images on this website were taken with this camera.

#### Praktica MTL5B
An East German SLR produced from 1985-1989. I purchased in reasonably good
condition in late 2025. The shutter release is in a slightly odd position,
although after adjusting to it I now find it very comfortable. Very satisfying
clunk when fired.

#### Zeiss Ikon Nettar IIb 518/16
A medium format camera with a folding lens, produced from 1949 to 1957. 
Purchased in good condition in late 2025. By far the most basic of my cameras,
but great fun to use once you understand its quirks.

### Lenses
#### Nikkor 18-55mm
This came as the kit lens with my Nikon D7100. It's an unremarkable but
solid choice for architecture or landscape photography, or everyday
snapshots. 

#### Nikkor 70-210mm
This was the first additional lens I bought after getting the D7100. 
It worked well as a starter tool for widllife photography and produced
some very nice images, but it's not a lens I reach for so often
since picking up the Beroflex.

#### Beroflex 500mm f/8
This might not be the sharpest, fastest, or most modern lens around, but if
you're looking for a narrow-angle lens and you can live with the limitations
(manual focus only) there's not much that can compete with the "Wundertüte" in
terms of value-for-money. Purchased some time in 2020, it's been my go-to for
birds and other wildlife ever since. With adaptor rings it can fit either the
Nikon D7100 or my Praktica MTL5B and I've been very happy with the results on
both. 

#### Pentacon 50mm f/1.8
This lens was bought as a set with my Praktica MTL5B. It's very possibly
the original lens sold with the camera in the 1980s. Opens up very wide to
give lovely shallow focus.

#### Jupiter-11 135mm f/4
A Soviet-built lens purchased second-hand in late 2025 for use with my 
Praktica. I think this is actually an M39 mount with some sort of home-made
M42 adaptor ring very firmly attached. 

### Accessories
#### Zeiss Ikon Ikophot
This is a selenium light-meter from the 1950s. It's a beautiful object to look
at. I use it exclusively [whenever I
take out my Nettar
camera](https://www.lomography.com/homes/chrishengler/tags/25626-zeiss-ikon/photos)
and I find it works very well despite its age. 

#### Voigtländer external rangefinder
The tricky thing about using my Nettar is getting the focus right. You focus it
by turning a dial on the lens, but the viewfinder doesn't look through the lens
so you essentially have to just guess the distance to whatever you're looking at.
That's where this thing comes in. Turning a 

`;

function Page() {
  return (
    <>
      <Markdown content={content} />
    </>
  );
}

export default Page;
