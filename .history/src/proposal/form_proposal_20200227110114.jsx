import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Drawer from "../Drawer";
import ExpansionPanel from "./ExpansionPanel.jsx";
import Button from "@material-ui/core/Button";
import Form from "./Form";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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

  fixedHeight: {
    height: 520,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid item xs={12} >
              <span style={{display:"flex"}}>
                <h1>提案入力</h1>
              </span>
              <Paper>
                <Form />
              </Paper>
              <div style={{marginTop: 10, textAlign: "center"}}>
                <Button variant="contained" >入力完了</Button>
              </div>
              
            </Grid>

          </Grid>

        </Container>
      </main>
    </div>
  );
}
