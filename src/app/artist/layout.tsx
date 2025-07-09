import Subheader from "@/components/subheader";

const links = [
  { title: "overview", url: "/artist" },
  { title: "drawing", url: "/artist/drawing" },
  { title: "oil", url: "/artist/oil" },
  { title: "watercolour", url: "/artist/watercolour" },
];

export default function ArtistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Subheader links={links} sectionTitle="artist" />
      {children}
    </>
  );
}
