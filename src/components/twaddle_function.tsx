import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Markdown from "./markdown";

export type TwaddleFunctionProps = {
  name: string;
  aliases: string[];
  description: string;
};

const TwaddleFunction: React.FC<TwaddleFunctionProps> = ({
  name,
  aliases,
  description,
}) => (
  <Accordion>
    <AccordionSummary>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography fontWeight="bold">{name}</Typography>
        {aliases.length > 0 && (
          <Typography color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            aliases: {aliases.join(", ")}
          </Typography>
        )}
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <Markdown content={description} />
    </AccordionDetails>
  </Accordion>
);

export default TwaddleFunction;
