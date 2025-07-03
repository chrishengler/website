export const navLinkSx = {
  position: "relative",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "currentColor",
    opacity: 0,
    transform: "scaleX(0)",
    transition: "opacity 0.3s, transform 0.3s",
  },
  "&:hover::after, &:focus::after, &.active::after": {
    opacity: 1,
    transform: "scaleX(1)",
  },
};
