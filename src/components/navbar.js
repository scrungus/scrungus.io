import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent" style={{boxShadow: "none"}}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} style={{color:"#ee6a2c"}} aria-label="menu" onClick={props.toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
