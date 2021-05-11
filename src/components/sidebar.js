import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import { theme } from '../theme';
import { Divider, List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemIcon} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
createStyles({
    paper : {
    width: '100%',
    minHeight: "50vh",
    backgroundColor: theme.palette.background.main,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center'
    },
    
    drawer: {
    width: drawerWidth,
    flexShrink: 0,
    },
    drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.main
    },

    drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    },

    drawerIcon: {
    color: theme.palette.primary.contrastText
    },

    sideBarItems: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.background.main,
        "&:hover": {
            backgroundColor: theme.palette.background.light
        }
    }
}))


export default function SideBar(props) {

    const classes = useStyles();
    
    return (      
        <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={props.visible}
              classes={{
                paper: classes.drawerPaper,
              }}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={props.onDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.drawerIcon}/> : <ChevronRightIcon className={classes.drawerIcon}/>}
                </IconButton>
              </div>
              <Divider></Divider>
              <List component="nav" className={classes.sideBarItems}>
                <ListItem button>
                    <ListItemIcon><InfoOutlinedIcon className={classes.drawerIcon}></InfoOutlinedIcon></ListItemIcon>
                    <ListItemText>
                        About This Page
                    </ListItemText>
                </ListItem>
              </List>
            </Drawer>
    );
}