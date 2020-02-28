import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ContainedButtons from "../Button";
import Button from '@material-ui/core/Button';
import Drawer from "../Drawer";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(closing_date,  upper_side, lower_side, sales, costs, margin, working_period, isTerminator) {
  return { closing_date,  upper_side, lower_side, sales, costs, margin, working_period, isTerminator};
}

const rows = [
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー', 80, 65, 15, '2020/2/1-6/30', "〇"),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー', 80, 65, 15, '2020/2/1-6/30'),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー', 80, 65, 15, '2020/2/1-6/30', "〇"),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー', 80, 65, 15, '2020/2/1-6/30', "〇"),
  createData('2020/02/15', 'ABC産業', 'CCDテクノロジー', 80, 65, 15, '2020/2/1-6/30'),
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
              <TableCell>成約した日付</TableCell>
              <TableCell align="center">上位企業</TableCell>
              <TableCell align="center">下位企業</TableCell>
              <TableCell align="center">売上</TableCell>
              <TableCell align="center">仕入</TableCell>
              <TableCell align="center">粗利</TableCell>
              <TableCell align="center">就業期間</TableCell>
              <TableCell align="center">終了者</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.closing_date}>
                <TableCell>{row.closing_date}</TableCell>

                <TableCell align="center">{row.upper_side}</TableCell>
                <TableCell align="center">{row.lower_side}</TableCell>
                <TableCell align="center">{row.sales}</TableCell>
                <TableCell align="center">{row.costs}</TableCell>
                <TableCell align="center">{row.margin}</TableCell>
                <TableCell align="center">{row.working_period}</TableCell>
                <TableCell align="center">{row.isTerminator}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}

