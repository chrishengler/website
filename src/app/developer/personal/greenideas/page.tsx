"use client";

import { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { runGreenIdeas } from "@/api";
import axios from "axios";
import Markdown from "@/components/markdown";
import SentenceTree, { SentenceNode } from "@/components/sentence_tree";

interface GreenIdeasResponse {
  tree: SentenceNode;
}

const content: string = `## Green Ideas

  Green Ideas is a random sentence generator, based on the principles of
  generative grammar.  Rules can be defined which are applied recursively to
  transform a root node into progressively more complex forms, until terminal
  nodes are reached for which no further expansion is defined.  This process
  builds up a tree structure as an abstract representation of a sentence.
  Additionally, handlers are defined converting each terminal Green Ideas node
  type into [Twaddle](/developer/personal/twaddle) tags. By applying this
  conversion and running the result through Twaddle, we get sentences which are
  typically absurd, yet grammatically valid (at least, most of the time...).

  Try generating some sentences below. By clicking the parts of speech, you can
  expand each sentence to illustrate the entire grammatical structure behind it,
  showing which part of the final sentence corresponds to each part of speech at
  every level of the tree.

  The button on this page generates sentences using the default ruleset and
  Twaddle dictionaries provided by the GreenIdeas package for generating
  English-language sentences. Both are pragmatic: the ruleset does not attempt
  to provide a complete representation of all valid English-language sentences,
  or to follow any specific academic grammar of the English language.
  Similarly, some part-of-speech definitions are rather arbitrarily combined or
  split for convenience, and the dictionaries exclude some obvious words
  (especially prepositions and conjunctions) which can prove awkward with this
  relatively basic grammatical ruleset.

  While the API is intended to be somewhate generic, it's likely that writing a
  ruleset for other languages would be rather difficult, especially if those
  languages are significantly different from English in their grammatical
  structure (for example, languages with grammatical gender may pose some issues
  but should be approachable if you're determined; agglutinative languages are
  likely to be much trickier).

  If you'd like a fuller description of how GreenIdeas works, see the
  [documentation](https://chrishengler.github.io/greenideas/).

  ### Get it

  Green Ideas is open source software made available under the MIT license.  You can
  access the code via the [GitHub
  repository](https://github.com/chrishengler/greenideas).  Documentation is
  available on [GitHub pages](https://chrishengler.github.io/greenideas/).

  Green Ideas is also distributed [via
  PyPi](https://pypi.org/project/greenideas/) and can be installed via any
  standard Python package manager, e.g.:

  \`> pip install greenideas\`

  \`> poetry add greenideas\`

  \`> uv add greenideas\`

  `;

function Page() {
  const [result, setResult] = useState<GreenIdeasResponse | null>(null);
  const [error, setError] = useState<string>("");

  const handleRun = async () => {
    setError("");
    setResult(null);
    try {
      const response = await runGreenIdeas();
      setResult(response.data);
    } catch (e) {
      const detail = axios.isAxiosError(e)
        ? e.response?.data?.detail
        : (e as Error).message;
      setError(`ERROR: ${detail}`);
    }
  };

  return (
    <>
      <Markdown content={content} />
      <Card variant="outlined" sx={{ width: "100%", mt: 2 }}>
        <CardContent>
          <Box>
            <Typography variant="h4">Try it out</Typography>
            <Button variant="contained" onClick={handleRun}>
              Generate a sentence
            </Button>
          </Box>
          {error && (
            <Typography sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
              {error}
            </Typography>
          )}
          {result && (
            <Box sx={{ mt: 2 }}>
              <Box sx={{ mt: 2, overflowX: "auto" }}>
                <SentenceTree node={result.tree} defaultExpanded />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Nodes displayed in white can be clicked to expand their
                  children.
                </Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default Page;
