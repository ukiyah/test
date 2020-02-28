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

function createData(date, name, impression) {
  return { date, name, impression};
}

const rows = [
  createData('2020/02/15', '山田太郎', '稼働中エンジニアの要望をしっ…'),
  createData('2020/02/15', '山田太郎', '稼働中エンジニアの要望をしっ…'),
  createData('2020/02/15', '山田太郎', '稼働中エンジニアの要望をしっ…'),
  createData('2020/02/15', '山田太郎', '稼働中エンジニアの要望をしっ…'),
  createData('2020/02/15', '山田太郎', '稼働中エンジニアの要望をしっ…'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>日付</TableCell>
              <TableCell align="center">作成者</TableCell>
              <TableCell align="center">所感・自営業日の目標</TableCell>
              <TableCell align="center">編集</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.impression}</TableCell>
                
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

