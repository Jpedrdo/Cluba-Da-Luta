import { createTheme } from "@mui/material/styles";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
  palette: {
    type: "dark",
    success: {
      main: "#31c302",
    },
    error: {
      main: "#F52C62",
    },
    warning: {
      main: "#ff9D00",
    },
    info: {
      main: "#2196f3",
    },
  },
  shadows,
  typography,
});

export default theme;
