"use client";

import { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { runGreenIdeas } from "@/api";
import axios from "axios";

function Page() {
  const [result, setResult] = useState("");

  const handleRun = async () => {
    try {
      const response = await runGreenIdeas();
      setResult(response.data);
    } catch (error) {
      const detail = axios.isAxiosError(error)
        ? error.response?.data?.detail
        : (error as Error).message;
      setResult(`ERROR: ${detail}`);
    }
  };
  return (
    <>
      <Typography variant="h3">Green Ideas</Typography>
      <Typography variant="body1">
        {`Green Ideas is a random sentence generator, based on the principles of generative grammar.
                    Rules can be defined which are applied recursively to transform a root node into progressively
                    more complex forms, until terminal nodes are reached for which no further expansion is defined.
                    This process builds up a tree structure as an abstract representation of a sentence.`}
        {`Additionally, handlers are defined converting each terminal Green Ideas node type into `}
        <Link href="/developer/personal/twaddle">Twaddle</Link>
        {` tags. By applying this conversion and running the result through Twaddle, we get sentences
                    which are typically absurd, yet grammatically valid (at least, most of the time...).`}
      </Typography>
      <Typography>
        {`Green Ideas comes with a default ruleset and a default set of Twaddle dictionaries, both targeting
                    the English language. Both are pragmatic: they do not attempt to provide a complete representation
                    of all valid English-language sentences, nor is any specific academic grammar of the English-language
                    being followed. Some part-of-speech definitions are rather arbitrarily combined or split for convenience.
                    While the API is intended to be somewhate generic, it's likely that writing a ruleset for other languages
                    would be rather difficult, especially if those languages are significantly different from English in their
                    grammatical structure (for example, languages with grammatical gender may pose some issues but should be
                    approachable if you're determined; agglutinative languages are likely to be much trickier).
                    `}
      </Typography>
      <Typography>
        See the{" "}
        <Link href="https://chrishengler.github.io/greenideas/">
          documentation
        </Link>{" "}
        for a fuller description of what Green Ideas is capable of and how it
        works, or try generating some sentences below.
      </Typography>
      <Card variant="outlined" sx={{ width: "100%", mt: 2 }}>
        <CardContent>
          <Box>
            <Typography variant="h4">Try it out</Typography>
            <Button variant="contained" onClick={handleRun}>
              Generate a sentence
            </Button>
          </Box>
          {result && (
            <Typography sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
              {result}
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default Page;
