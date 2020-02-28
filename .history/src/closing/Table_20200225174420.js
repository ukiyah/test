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

function createData(closing_date,  upper_side, lower_side) {
  return { closing_date,  upper_side, lower_side};
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
              <TableCell>成約した日付</TableCell>
              <TableCell align="center">上位企業</TableCell>
              <TableCell align="center">下位企業</TableCell>
              <TableCell align="center">売上</TableCell>
              <TableCell align="center">仕入</TableCell>
              <TableCell align="center">粗利</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.closing_date}>
                <TableCell>{row.closing_date}</TableCell>

                <TableCell align="center">{row.upper_side}</TableCell>
                <TableCell align="center">{row.lower_side}</TableCell>
                <TableCell align="center">
                    <Button variant="contained" style={{marginLeft: 10}}>時間</Button>
                    <Button variant="contained" style={{marginLeft: 10}}>金額</Button>
                    <Button variant="contained" style={{marginLeft: 10}}>中止</Button>
                </TableCell>
                <TableCell align="center">
                  <ContainedButtons name="結果入力"></ContainedButtons>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}

