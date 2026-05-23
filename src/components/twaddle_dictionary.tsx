import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export type TwaddleDictionaryProps = {
  name: string;
  forms: string[];
  example: Record<string, string>;
};

const TwaddleDictionary: React.FC<TwaddleDictionaryProps> = ({
  name,
  forms,
  example,
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
        <Typography component="span" fontWeight="bold">
          {name}
        </Typography>
        <Typography component="span" sx={{ textAlign: "right" }}>
          {forms.join(", ")}
        </Typography>
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {Object.entries(example).map(([key, value]) => (
            <tr key={key}>
              <td
                style={{
                  verticalAlign: "top",
                  padding: "0.5rem 0",
                  fontWeight: "bold",
                }}
              >
                {key}
              </td>
              <td style={{ verticalAlign: "top", padding: "0.5rem 0" }}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AccordionDetails>
  </Accordion>
);

export default TwaddleDictionary;
