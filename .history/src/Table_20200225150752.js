import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ContainedButtons from "./Button";
import Button from '@material-ui/core/Button';
import Drawer from "./Drawer";
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
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import { yellow } from '@material-ui/core/colors';
import Drawer from "./Drawer";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const rows = [
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
      <Drawer />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>日付</TableCell>
              <TableCell align="center">上位企業</TableCell>
              <TableCell align="center">下位企業</TableCell>
              <TableCell align="center">結果</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                
                <TableCell align="center">
                  <ContainedButtons name="成功"></ContainedButtons>
                  {/* <Button className="button" variant="contained" color="primary" variant="contained" color="primary" disableElevation>成功</Button> */}
                  <Button variant="contained" style={{marginLeft: 10}}>失敗</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}

