import React, { Component } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Home from './pages/home'
import { theme } from './theme'

class App extends Component {
  render() {
    
    return (
      <React.Fragment>
        <CssBaseline>
          <ThemeProvider theme={theme}>
          <Home></Home>
        </ThemeProvider>   
        </CssBaseline>
      </React.Fragment>
    );
  }
}
export default App;