import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Markdown from "./markdown";

interface EquipmentPanelProps {
  name: string;
  description: string;
}

const EquipmentAccordion: React.FC<EquipmentPanelProps> = ({
  name,
  description,
}) => (
  <Accordion>
    <AccordionSummary>
      <Typography variant="h5">{name}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Markdown content={description} />
    </AccordionDetails>
  </Accordion>
);

export default EquipmentAccordion;
