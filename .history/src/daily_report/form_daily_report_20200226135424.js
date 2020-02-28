import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import { yellow } from '@material-ui/core/colors';
import Drawer from "../Drawer";




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 520,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            
            <Grid item xs={12} >
              <Paper className={fixedHeightPaper}>
                
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} >
              <Paper className={classes.paper}>
                <h2 style={{fontWeight:"normal"}}>提案：29/40件　面談設定：5/ 4件　面談実施：3/ 4件　成約：2/4件　粗利：12/20万円</h2>
              </Paper>
            </Grid>
            <Grid item xs={3} >
              <Paper className={classes.paper}>
                <h3 style={{fontWeight:"normal"}}><InfoIcon color="secondary" fontSize="large"/>本日の日報を提出できます</h3>
              </Paper>
            </Grid>
            <Grid item xs={3} >
              <Paper className={classes.paper}>
                <h3 style={{color:"red"}}><WarningIcon style={{ color: yellow[600] }} fontSize="large"/>2月4日の日報が未提出です</h3>
              </Paper>
            </Grid>
            <Grid item xs={3} >
              <Paper className={classes.paper}>
                <h3 style={{fontWeight:"normal"}}><HelpIcon color="primary" fontSize="large" />実施後の結果が未入力です</h3><p style={{color:"#757575"}}>株式会社テクノ×パート…</p>
              </Paper>
            </Grid>
            <Grid item xs={3} >
              <Paper className={classes.paper}>
                <h3 style={{fontWeight:"normal"}}><InfoIcon color="secondary" fontSize="large"/>本日の面談</h3><p>17:30～　新宿</p>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper}>
                <Deposits />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
