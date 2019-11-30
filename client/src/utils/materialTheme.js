import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Titillium Web",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  palette: {
    text: {
      primary: "#FFF",
      secondary: "#7cafcd"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#303260"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#8bb6cb"
      // dark: will be calculated from palette.secondary.main,
    }
    // error: will use the default color
  }
});
