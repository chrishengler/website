import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Typography variant="body1">
        {`I am a software developer with over a decade of experience producing efficient and 
                reliable code in multiple domains using multiple languages. I feel most at home
                working on the backend, but I'm versatile and always willing to step outside my 
                comfort zone and learn new technologies.`}
      </Typography>
      <Typography variant="body1">
        {`I have a PhD in particle physics and I bring an analytical mindset, which enables me 
                to get to the root of problems and anticipate potential difficulties before they 
                occur.`}
      </Typography>
      <Typography variant="body1">
        {`In addition to my native English, I speak fluent German. I've lived in Hamburg since
                late 2010 and am open to work within the Greater Hamburg area, or fully-remote 
                positions based elsewhere in Germany.`}
      </Typography>
      <Typography variant="body1">
        If you want to discuss opportunities, I can be contacted on{" "}
        <Link href="https://linkedin.com/chris-hengler">LinkedIn</Link>{" "}
        (preferred) or{" "}
        <Link href="https://www.xing.com/profile/Chris_Hengler">Xing</Link>.
      </Typography>
    </>
  );
}
