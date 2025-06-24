import React from 'react';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { List, ListItem, ListItemIcon } from '@mui/material';
import Link from 'next/link';

export default function Page() {
  return (
    <>
    <Typography variant="body1">
      Find me elsewhere:
    </Typography>
    <Typography variant="h6">
      Professional
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <GitHubIcon htmlColor="black" />
        </ListItemIcon>
        <Link href="https://github.com/chrishengler">@chrishengler on GitHub</Link>
      </ListItem>
      <ListItem>
        <ListItemIcon><LinkedInIcon htmlColor="black" /></ListItemIcon>
        <Link href="https://www.linkedin.com/in/chris-hengler/">Chris Hengler on LinkedIn</Link>
      </ListItem>
      </List>
    <Typography variant="h6">
      Personal
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <img src="/icons/storygraph.png" alt="storygraph" style={{ width: 24, height: 24 }} />
        </ListItemIcon>
        <Link href="https://app.thestorygraph.com/profile/chrishengler">My StoryGraph profile</Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src="/icons/cornelllab.png" alt="Cornell Lab of Ornithology" style={{ width: 24, height: 24 }} />
        </ListItemIcon>
        <Link href="https://ebird.org/profile/MzAyNDU5MQ">My eBird profile</Link>
      </ListItem>
      <ListItem>
        <ListItemIcon><GitHubIcon htmlColor="black" /></ListItemIcon>
        <Link href="https://github.com/cunninghound">@cunninghound on GitHub</Link>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src="/icons/itch.svg" alt="itch.io" style={{ width: 24, height: 24 }} />
        </ListItemIcon>
        <Link href="https://cunninghound.itch.io/">@CunningHound on itch.io</Link>
      </ListItem>
    </List>
    </>
  );
}