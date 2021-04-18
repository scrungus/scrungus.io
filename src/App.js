import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import NavBar from './components/navbar';
import Home from './pages/home'

const theme = createMuiTheme({
  palette: {
    primary: {
      light:"#403556",
      main: "#180f2d",
      dark:"#000004",
      contrastText:"#ffffff"
    },
    secondary: {
      light:"#ffbba2",
      main: "#ff8a73",
      dark:"#c85a47",
      contrastText:"#000000"
    }
  }
});

class App extends Component {
  render() {
    
    return (
      <ThemeProvider theme={theme}>
         <div>
          <NavBar></NavBar>
        </div>
        <Home></Home>
      </ThemeProvider>   
    );
  }
}
export default App;