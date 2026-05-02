import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

interface EquipmentDetailProps {
  icon: SvgIconComponent;
  label: string;
  value: string;
}

const EquipmentDetail: React.FC<EquipmentDetailProps> = ({
  icon: Icon,
  label,
  value,
}) => (
  <Box
    display="flex"
    sx={{
      gap: 1,
      color: "inherit",
      alignItems: "flex-start",
      justifyItems: "left",
    }}
  >
    <Icon fontSize="small" />
    <Typography variant="body1" sx={{ display: { xs: "none", md: "inline" } }}>
      {label}:
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Box>
);

export default EquipmentDetail;
