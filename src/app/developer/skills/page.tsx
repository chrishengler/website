import { List, ListItem, Typography } from "@mui/material";

function Page() {
  return (
    <>
      <Typography variant="body1">
        {`Over the course of my career I've worked with too many different technologies
                to list all of them here.  What you'll find below is just a summary of some of 
                those I have worked with most often, most recently, or most happily. `}
      </Typography>
      <Typography variant="h4" sx={{ pt: 2 }}>
        Programming Languages
      </Typography>
      <Typography variant="body1">
        I have significant professional experience with the following languages:
      </Typography>
      <List sx={{ pl: 4 }}>
        <ListItem>C++</ListItem>
        <ListItem>Python</ListItem>
      </List>
      <Typography variant="body1">
        I also have some familiarity with the following:
      </Typography>
      <List sx={{ pl: 4 }}>
        <ListItem>C# (intermediate)</ListItem>
        <ListItem>JavaScript (basic)</ListItem>
        <ListItem>TypeScript (basic)</ListItem>
      </List>
      <Typography variant="h4" sx={{ pt: 2 }}>
        Frameworks and Tools
      </Typography>
      <Typography variant="body1">
        I have significant professional experience with the following frameworks
        and tools:
      </Typography>
      <List sx={{ pl: 4 }}>
        <ListItem>Django and Django REST Framework</ListItem>
        <ListItem>PostgreSQL</ListItem>
        <ListItem>Google Cloud Platform</ListItem>
        <ListItem>Boost Library</ListItem>
      </List>
      <Typography variant="body1">
        I also have some experience with the frameworks and tools listed below:
      </Typography>
      <List sx={{ pl: 4 }}>
        <ListItem>Docker</ListItem>
        <ListItem>Qt</ListItem>
        <ListItem>React/Next.js</ListItem>
        <ListItem>Asio</ListItem>
        <ListItem>WebSocket</ListItem>
      </List>
    </>
  );
}

export default Page;
