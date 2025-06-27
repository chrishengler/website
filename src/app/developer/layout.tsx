import Subheader from "@/components/subheader";

const links = [
{ title: 'overview', url: '/developer'},
{ title: 'motivation', url: '/developer/motivation'},
{ title: 'skills', url: '/developer/skills'},
{ title: 'cv', url: '/developer/cv'}
]

export default function DeveloperLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Subheader links={links} />
      {children}
    </>
  );
}