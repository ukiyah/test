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

function createData(visit_company, date, station, person_in_charge, time) {
  return { visit_company, date, station, person_in_charge, time};
}

const rows = [
  createData('ABC産業','2020/02/15', '神田', 'アベさま','14：00～'),
  createData('ABC産業','2020/02/15', '神田', 'アベさま','14：00～'),
  createData('ABC産業','2020/02/15', '神田', 'アベさま','14：00～'),
  createData('ABC産業','2020/02/15', '神田', 'アベさま','14：00～'),
  createData('ABC産業','2020/02/15', '神田', 'アベさま','14：00～'),
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
              <TableCell>訪問日</TableCell>
              <TableCell>訪問先企業</TableCell>
              <TableCell align="center">最寄り駅</TableCell>
              <TableCell align="center">担当者</TableCell>
              <TableCell align="center">訪問時間</TableCell>
              <TableCell align="center">編集</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">{row.date}</TableCell>
                <TableCell>{row.visit_company}</TableCell>
                <TableCell align="center">{row.station}</TableCell>
                <TableCell align="center">{row.person_in_charge}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">
                    <Button variant="contained" style={{marginLeft: 10}}>編集</Button>
                    <Button variant="contained" style={{marginLeft: 10}}>削除</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}

