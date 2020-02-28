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
    minWidth: 10,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('合計', 159, 6.0, 24, 4.0),
  createData('第1週', 237, 9.0, 37, 4.3),
  createData('第2週', 262, 16.0, 24, 6.0),
  createData('第3週', 305, 3.7, 67, 4.3),
  createData('第4週', 356, 16.0, 49, 3.9),
  createData('第5週',353,455,5,55 ),
];

export default function DenseTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold"}}>{props.title}</TableCell>
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
