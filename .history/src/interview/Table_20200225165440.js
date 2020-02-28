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

function createData(status,date, upper_side, lower_side) {
  return { status,date, upper_side, lower_side};
}

const rows = [
  createData('調整中','2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('調整中','2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('調整中','2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('設定済','2020/02/15', 'ABC産業', 'CCDテクノロジー'),
  createData('実施済','2020/02/15', 'ABC産業', 'CCDテクノロジー'),
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
            　<TableCell>ステータス</TableCell>
              <TableCell>日付</TableCell>
              <TableCell align="center">上位企業</TableCell>
              <TableCell align="center">下位企業</TableCell>
              <TableCell align="center">結果</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.status}>
                <TableCell component="th" scope="row">
                  {row.status}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.upper_side}</TableCell>
                <TableCell align="center">{row.lower_side}</TableCell>
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

