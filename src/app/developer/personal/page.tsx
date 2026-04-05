import Project from "@/components/project";
import { Typography } from "@mui/material";

function Page() {
  return (
    <>
      <Typography variant="body1">
        {`Besides my professional software activities I also have a number of personal projects.
                These personal projects are motivated variously by my own interests, problems, or simply
                as learning experiences. I'm particularly interested in projects relating to procedural
                generation and language.`}
      </Typography>

      <Project
        name="Twaddle"
        link="/developer/personal/twaddle"
        github="https://github.com/chrishengler/twaddle"
        language="Python"
        description="Twaddle is a text-templating tool. In its simplest use case it replaces placeholders
                    with text from user-provided dictionaries, turning input like 'this is my <noun>' into something like 'this is my apple' 
                    or 'this is my camera'. More advanced features include random branches, looping, basic mathematical operations 
                    and boolean logic. These functions can all be used recursively, making it this simple tool surprisingly powerful. "
      />

      <Project
        name="Green Ideas"
        link="/developer/personal/greenideas"
        github="https://github.com/chrishengler/greenideas"
        language="Python"
        description="Green Ideas is a random sentence generator built on the principles of generative grammar. 
                    It applies recursive rewrite rules to turn a root node representing an abstract 'utterance'
                    into progressively more complex grammatical structures.
                     "
      />

      <Project
        name="Textmill"
        language="Python"
        description="TextMill is an experiment in using advanced Twaddle features to build a
                    self-consistent procedurally-generated history of a fictional small town. It has not yet received a public release."
      />

      <Project
        name="TerrainGen"
        github="https://github.com/chrishengler/terraingen"
        language="C++/Rust"
        description="TerrainGen is a terrain generation tool. It allows for heightmaps to be generated using a combination of layers,
                    each of which can be generated and weighted separately. Currently it implements Perlin noise and the diamond-square algorithm
                    for layer generation, and a hydraulic erosion modifier."
      />
    </>
  );
}

export default Page;
