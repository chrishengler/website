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
        link="https://github.com/chrishengler/twaddle"
        language="Python"
        description="Twaddle is a text-templating tool. In its simplest use case it replaces placeholders
                    with text from user-provided dictionaries, turning input like 'this is my <noun>' into something like 'this is my apple' 
                    or 'this is my camera'. More advanced features include random branches, looping, basic mathematical operations 
                    and boolean logic. These functions can all be used recursively, making it this simple tool surprisingly powerful. "
      />

      <Project
        name="Green Ideas"
        link="https://github.com/chrishengler/greenideas"
        language="Python"
        description="Green Ideas is a random sentence generator based on generative grammar principles. It allows rules to be
                    defined which are applied recursively to transform a root node (representing an abstract utterance, which may be e.g. 
                    a sentence or question) into progressively more complex grammatical forms, until terminal nodes are reached and a complete
                    sentence tree has been generated. This tree is converted into a template which is then run through Twaddle to produce 
                    a randomly-generated but grammatically valid sentence. The package contains a set of rules and Twaddle dictionaries to
                    generate highly varied English-language sentences, which may range from trivial statements such as 'A bird sits', through
                    more interesting sentences and questions such as 'He was lending me candles' and 'Hadn't those leaves been showing you the table proudly?',
                    to extremely complex sentences with deeply embedded elements such as 'This urn, that shows her those iguanas, that flattened actors, disastrously, rolls this rather sour cat'.  
                    Both the provided rules and the provided Twaddle dictionaries are defined pragmatically, and do not aim to be a complete 
                    or perfect description of all grammatically valid English sentences, but to generate a pleasingly wide variety of nonsense
                    without being obviously ungrammatical. New rules or grammars can be defined targeting other languages."
      />

      <Project
        name="Textmill"
        language="Python"
        description="TextMill is an experiment in using advanced Twaddle features to build a
                    self-consistent procedurally-generated history of a fictional small town. It has not yet received a public release."
      />

      <Project
        name="TerrainGen"
        link="https://github.com/chrishengler/terraingen"
        language="C++/Rust"
        description="TerrainGen is a terrain generation tool. It allows for heightmaps to be generated using a combination of layers,
                    each of which can be generated and weighted separately. Currently it implements Perlin noise and the diamond-square algorithm
                    for layer generation, and a hydraulic erosion modifier."
      />
    </>
  );
}

export default Page;
