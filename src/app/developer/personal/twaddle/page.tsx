"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { runTwaddle } from "@/api";
import axios from "axios";
import { ChevronRight, Refresh } from "@mui/icons-material";

const exampleSentences = [
  "hello, <noun>!",
  "[case:title]\a <adj> <noun> <verb.ed>",
  "You should {always|never} <verb> <adv>!",
  "[//\\ss//:a silly snake was in the sand; sss]",
  "[hide]{[copy:num]{[rand:3;6]}}Now I'll say '<noun::=n>' [paste:num] times: [rep:[paste:num]][sep:\\s]{<noun::=n>!}",
  "[abbr]{Hello, internet}!",
  "[save:a]{the <adj> <noun> <verb.ed>!} [load:a] [case:upper][load:a]",
  "[copy:a]{the <adj> <noun> <verb.ed>!} [paste:a] [case:upper][paste:a]",
  "[//[aeiou]+//:double vowel sequences;[match][match]]",
];

function Page() {
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState("");

  function replaceWithExample() {
    setSentence((prev) => {
      let next;
      do {
        next =
          exampleSentences[Math.floor(Math.random() * exampleSentences.length)];
      } while (next === prev && exampleSentences.length > 1);
      return next;
    });
  }

  useEffect(() => {
    replaceWithExample();
  }, []);

  const handleRun = async () => {
    try {
      const response = await runTwaddle(sentence);
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
      <Typography variant="h3">Twaddle</Typography>
      <Typography variant="body1">
        {`Twaddle is a text-templating tool. In its simplest use case it replaces placeholders with text from
                user-provided dictionaries, turning input like \`this is my <noun>\` into something like \`this is my
                apple\` or \`this is my camera\`.`}
      </Typography>
      <Typography>
        {`On a more technical level, Twaddle is a domain-specific language for text manipulation. 
                In addition to the simple use case described above (replacing placeholders with text from dictionary files)
                it offers a wide variety of more advanced features including random branches, looping, basic mathematical
                operations, regexes, variables, and boolean logic. Recursive evaluation makes this tool surprisingly powerful`}
      </Typography>
      <Typography>
        See the{" "}
        <Link href="https://chrishengler.github.io/twaddle/">
          documentation
        </Link>{" "}
        for a fuller description of what Twaddle is capable of.
      </Typography>
      <Card variant="outlined" sx={{ width: "100%", mt: 2 }}>
        <CardContent>
          <Box>
            <Typography variant="h4">Try it out</Typography>
            <Typography>
              {`Hit the refresh icon for a new suggested Twaddle sentence, or write your own. Hit 'run' to see the results.`}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2, alignItems: "center" }}>
              <TextField
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleRun();
                }}
                size="small"
                sx={{ flexGrow: 1, fontFamily: "var(--font-lekton)" }}
                slotProps={{
                  input: {
                    sx: { fontFamily: "var(--font-lekton)" },
                    startAdornment: (
                      <InputAdornment position="start">
                        <ChevronRight />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Button variant="contained" onClick={handleRun}>
                Run
              </Button>
              <Button variant="contained" onClick={replaceWithExample}>
                <Refresh />
              </Button>
            </Box>
            {result && (
              <Typography sx={{ mt: 2, whiteSpace: "pre-wrap" }}>
                {result}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default Page;
