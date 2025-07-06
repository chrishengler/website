import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { List, ListItem, ListItemIcon } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Typography variant="body1">Find me elsewhere:</Typography>
      <Typography variant="h6">Professional</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <LinkedInIcon htmlColor="black" />
          </ListItemIcon>
          <Link href="https://www.linkedin.com/in/chris-hengler/">
            Chris Hengler on LinkedIn
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Image
              src="/icons/xing.png"
              alt="Xing"
              height={24}
              width={24}
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <Link href="https://www.xing.com/profile/Chris_Hengler">
            Chris Hengler on Xing
          </Link>
          .
        </ListItem>
      </List>

      <Typography variant="h6">Software</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <GitHubIcon htmlColor="black" />
          </ListItemIcon>
          <Link href="https://github.com/chrishengler">
            @chrishengler on GitHub
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GitHubIcon htmlColor="black" />
          </ListItemIcon>
          <Link href="https://github.com/cunninghound">
            @cunninghound on GitHub
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Image
              src="/icons/cunning_hound.png"
              alt="Cunning Hound"
              height={64}
              width={64}
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <Link href="https://www.cunninghound.com">Cunning Hound games</Link>
        </ListItem>
      </List>

      <Typography variant="h6">Personal</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Image
              src="/icons/storygraph.png"
              alt="storygraph"
              height={24}
              width={24}
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <Link href="https://app.thestorygraph.com/profile/chrishengler">
            My StoryGraph profile
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Image
              src="/icons/cornelllab.png"
              alt="Cornell Lab of Ornithology"
              height={24}
              width={24}
              style={{ width: 24, height: 24 }}
            />
          </ListItemIcon>
          <Link href="https://ebird.org/profile/MzAyNDU5MQ">
            My eBird profile
          </Link>
        </ListItem>
      </List>
    </>
  );
}
