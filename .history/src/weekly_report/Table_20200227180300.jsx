import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('予算', 159, 6.0, 24, 4.0),
  createData('実績', 237, 9.0, 37, 4.3),
  createData('見込', 262, 16.0, 24, 6.0),
  createData('進捗率（実績）', 305, 3.7, 67, 4.3),
  createData('進捗率（見込）', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>粗利</TableCell>
            <TableCell align="right">前年12月</TableCell>
            <TableCell align="right">1月</TableCell>
            <TableCell align="right">2月</TableCell>
            <TableCell align="right">3月</TableCell>
            <TableCell align="right">4月</TableCell>
            <TableCell align="right">5月</TableCell>
            <TableCell align="right">6月</TableCell>
            <TableCell align="right">7月</TableCell>
            <TableCell align="right">8月</TableCell>
            <TableCell align="right">9月</TableCell>
            <TableCell align="right">10月</TableCell>
            <TableCell align="right">11月</TableCell>
            <TableCell align="right">12月</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
