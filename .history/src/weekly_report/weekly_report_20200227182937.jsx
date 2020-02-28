import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Drawer from "../Drawer";
import Button from "@material-ui/core/Button";
import Table from "./table_for_performance";
import TableForSES from "./table_for_ses";
import SelectBox from "../SelectBox";
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
              <h1>週報</h1>
              <SelectBox value="表示年" item1="2020年" item2="2019年" item3="2018年" />
              <br></br>
              <Table title="粗利" />
              <br></br>
              <Table title="売上" />
              <br></br>
              <TableForSES title="成約数(SES+ソリューション他)" />
              <div style={{ marginTop: 10, textAlign: "center" }}>
                <Button variant="contained" >PDF出力</Button>
              </div>

            </Grid>

          </Grid>

        </Container>
      </main>
    </div>
  );
}
