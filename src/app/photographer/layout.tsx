import Subheader from "@/components/subheader";

const links = [
{ title: 'overview', url: '/photographer'},
{ title: 'architecture', url: '/photographer/architecture'},
{ title: 'landscape', url: '/photographer/landscape'},
{ title: 'wildlife', url: '/photographer/wildlife'}
]

export default function PhotographerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Subheader links={links} sectionTitle="photographer"/>
      {children}
    </>
  );
}