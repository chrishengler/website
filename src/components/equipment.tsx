import { Box } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import EquipmentDetail from "./equipment_detail";

interface EquipmentProps {
  camera: string;
  lens?: string;
  film?: string;
}

const Equipment: React.FC<EquipmentProps> = ({ camera, lens, film }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: { xs: "flex-start", md: "center" },
      justifyContent: "left",
      ml: { xs: 0, md: 2 },
      flexDirection: { xs: "column", md: "row" },
      gap: { xs: 1, md: 10 },
    }}
  >
    <EquipmentDetail icon={PhotoCameraIcon} label="camera" value={camera} />
    {lens && (
      <EquipmentDetail icon={CameraOutlinedIcon} label="lens" value={lens} />
    )}
    {film && (
      <EquipmentDetail icon={CameraRollIcon} label="film" value={film} />
    )}
  </Box>
);

export default Equipment;
