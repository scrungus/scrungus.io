import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
      primary: {
        light:"#403556",
        main: "#180f2d",
        dark:"#1F2020",
        contrastText:"#ffffff"
      },
      secondary: {
        light:"#ffbba2",
        main: "#ff8a73",
        dark:"#c85a47",
        contrastText:"#000000"
      },
      background: {
        main: "#1F2020",
        light: "#464747"
      }
    }
  });

export default theme;