import React from 'react';
import { Avatar, Box, Button, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core';
import { ThemeProvider }  from '@material-ui/core';
import { theme } from '../theme';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SideBar from '../components/sidebar';
import NavBar from '../components/navbar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    container : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center'
    },
    sizeAvatar : {
      height: theme.spacing(25),
      width: theme.spacing(25),
      margin: 10,
    },
    sizeLIAvatar : {
      height: theme.spacing(3.5),
      width: theme.spacing(3.5),
      margin: 10,
    },
    paper : {
      width: '100%',
      minHeight: "50vh",
      backgroundColor: theme.palette.background.main,
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center'
    },
    
    backgroundPaper : {
      width: '100%',
      minHeight: "50vh",
      backgroundImage: `url("/img/background.jpg")`,
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'center'
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },

    text: {
      fontWeight: 500
    },

    bioTitles: {
      fontWeight : 400
    },

    italics: {
      fontWeight : 400,
      fontStyle:"italic"
    },

    bold: {
      fontWeight : 400,
      fontStyle:"bold"
    },

    card: {
      backgroundColor:"transparent"
    },

    cardContent: {
      color: theme.palette.primary.contrastText
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

    divider: {
      background: theme.palette.background.light,
  },
  }))

/*    */
export default function Home() {
  const classes = useStyles();
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
        <ThemeProvider theme={theme}>
          <Paper className={classes.backgroundPaper} style={{minHeight: "70vh"}} square="true">
            <NavBar toggleDrawer={toggleDrawer}></NavBar>
            <SideBar visible={drawerVisible} onDrawerClose={onDrawerClose}></SideBar>
            <Grid container alignItems="center"  direction="row" justify="space-evenly">             
              <Grid item xs></Grid>
              <Grid item xs></Grid>
              <Grid item xs>
                  <Grid container>

                    <Grid item>
                      <Typography className={classes.text} variant="h4" align="center">
                          TYLER CHRISTIE
                      </Typography>
                        <Box m={1}>
                          <Divider variant="middle"></Divider>
                        </Box>
                    </Grid>

                    <Grid item>
                      <Typography className={classes.text} variant="body1" align="center">
                        Data Science, DevOps and Software Development.
                      </Typography>
                    </Grid>

                    <Grid item>
                      <div>
                      <Button variant="link" href="https://github.com/scrunguss">
                          <Avatar variant='circular' alt="scrungus" src={process.env.PUBLIC_URL + '/img/github.png'}> </Avatar>
                        </Button>
                        <Button variant="link" href="https://www.linkedin.com/in/tyler-christie-1b325a155/">
                          <Avatar className={classes.sizeLIAvatar} variant="rounded" alt="scrungus" src={process.env.PUBLIC_URL + '/img/in.png'}> </Avatar>
                      </Button>
                      </div>
                    </Grid>

                  </Grid>  

              </Grid>
              <Grid item xs={2} align="left">
                <Avatar className={classes.sizeAvatar} variant='circular' alt="scrungus" src={process.env.PUBLIC_URL + '/img/scrunguspp.png'}> </Avatar>
              </Grid>
            </Grid> 
          </Paper>
          <Paper className={classes.paper} style={{minHeight: "60vh"}} square="true">
              <Grid container alignItems="center" direction="row" justify="space-evenly">
                <Grid item xs></Grid>
                <Grid item xs={8}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography className={classes.bioTitles} variant="h6">
                        MY WORK
                      </Typography>
                      <Typography variant="body2">
                      I am a recent Computer Science graduate from the University of Bath, specialising in Machine Learning with special interest in the area of Reinforcement Learning and investigating efficient exploration strategies for sparse reward environments or large state-action spaces. Interested in roles involving backend development, full-stack, FinTech, blockchain technology and machine learning.
                      </Typography>
                      <Box m={1}>
                          <Divider variant="middle" ></Divider>
                        </Box>
                      <Typography className={classes.bioTitles} variant="h6">
                        LANGUAGES
                      </Typography>
                      <Grid container alignItems="center" direction="row" justify="space-evenly">
                        <Grid item xs={4}>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="Python" src={process.env.PUBLIC_URL + '/img/langicons/python.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                Python
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="C" src={process.env.PUBLIC_URL + '/img/langicons/C.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                C/C++
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="cs" src={process.env.PUBLIC_URL + '/img/langicons/CS.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                C#
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="react" src={process.env.PUBLIC_URL + '/img/langicons/react.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                React
                              </ListItemText>
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={4}>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="bash" src={process.env.PUBLIC_URL + '/img/langicons/bash.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                Bash
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="sql" src={process.env.PUBLIC_URL + '/img/langicons/sql.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                SQL
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="matlab" src={process.env.PUBLIC_URL + '/img/langicons/matlab.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                MATLAB
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="java" src={process.env.PUBLIC_URL + '/img/langicons/java.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                Java
                              </ListItemText>
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={4}>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="haskell" src={process.env.PUBLIC_URL + '/img/langicons/haskell.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                Haskell
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="solid" src={process.env.PUBLIC_URL + '/img/langicons/solid.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                Solidity
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar variant="circular" alt="elixir" src={process.env.PUBLIC_URL + '/img/langicons/elixir.png'}></Avatar>
                              </ListItemAvatar>
                              <ListItemText>
                                Elixir
                              </ListItemText>
                            </ListItem>
                            <ListItem>

                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                      <Box m={1}>
                          <Divider variant="middle" ></Divider>
                        </Box>
                      <Typography className={classes.bioTitles} variant="h6">
                        TECHNOLOGIES
                      </Typography>
                      <Grid container alignItems="center" direction="row" justify="space-evenly">
                        <Grid item xs={6}>
                          <ul>
                            <li>Docker/Swarm</li>
                            <li>Python Libraries:</li>
                            <ul>
                              <li>Flask</li>
                              <li>FastAPI</li>
                              <li>Django</li>
                              <li>Data Science - SciKit-Learn, NumPy, Keras </li>
                            </ul>
                            <li>Linux</li>
                            <li>Tensorflow</li>
                            <li>React</li>
                          </ul>
                        </Grid>
                        <Grid item xs={6}>
                          <ul>
                            <li>Kubernetes</li>
                            <li>Nginx</li>
                            <li>Azure DevOps</li>
                            <li>Truffle Suite</li>
                            <li>LaTeX</li>
                            <li>TeamCity</li>
                            <li>.NET Framework</li>
                            <li>PyTorch</li>
                          </ul>
                        </Grid>
                      </Grid>
                      <Box m={1}>
                          <Divider variant="middle" ></Divider>
                        </Box>
                      <Typography className={classes.bioTitles} variant="h6">
                        EDUCATION
                      </Typography>
                      <Grid container alignItems="center" direction="column" justify="space-evenly">

                        <Grid container alignItems="center" justify="space-around">
                          <Grid item xs={3}>
                            <Typography className={classes.text} variant="body1">
                              University of Bath - Computer Science
                            </Typography>
                            <Box m={2}>
                            <Divider className={classes.divider} variant="inset" ></Divider>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                          <Typography className={classes.italics} variant="body1">
                            Classes : Mathematical Foundations, Reinforcement Learning, Functional Programming, Compilers, Individual Project, System Architecture, Databases
                          </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography className={classes.text} variant="body1">
                              2019-2022
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid container alignItems="center" justify="space-around">
                          <Grid item xs={3}>
                            <Typography className={classes.text} variant="body1">
                              Peter Symonds College
                            </Typography>
                            <Box m={2}>
                            <Divider className={classes.divider} variant="inset" ></Divider>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                          <Typography className={classes.italics} variant="body1">
                            A Levels : Computer Science, Philosophy, Economics, Mathematics (Self-Taught)
                          </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography className={classes.text} variant="body1">
                              2016-2018
                            </Typography>
                          </Grid>
                        </Grid>
                          
                      </Grid>
                    </CardContent>         
                  </Card>
                </Grid>
                <Grid item xs></Grid>
              </Grid>
          </Paper>
        </ThemeProvider>
  );
}