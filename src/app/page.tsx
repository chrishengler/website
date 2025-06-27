import React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/dist/client/link';

export default function HomePage() {
  return (
        <div>
            <Typography variant="h4">
                Hi
            </Typography>
            <Typography variant="body1">
                I'm Chris.
            </Typography>

            <Typography variant="body1">
                I'm a software developer. For more on my professional work, take a look at
                my <Link href="/developer">developer</Link> page. I also do some programming in a non-professional
                capacity, including occasionally making small games as <Link href="https://cunninghound.itch.io">Cunning Hound</Link>.
            </Typography>

            <Typography variant="body1">
                In my free time I enjoy - among other things - birdwatching, photography, painting and sketching.
                Some of my art can be found on my <Link href="/art">art page</Link>.
            </Typography>
        </div>
  );
}