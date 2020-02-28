import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import ContainedButtons from "./Button";
import Button from '@material-ui/core/Button';
// Generate Order Data
function createData(id, date, upper_company, lower_company) {
  return { id, date, upper_company, lower_company };
}

const rows = [
  createData(0, '1月31日', '株式会社ABC', '株式会社プロップス'),
  createData(1, '2月2日', '株式会社ABC', '株式会社プロップス'),
  createData(2, '2月4日', '株式会社ABC', '株式会社プロップス'),
  createData(3, '2月8日', '株式会社ABC', '株式会社プロップス'),
  createData(4, '2月10日', '株式会社ABC', '株式会社プロップス'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
      <Title>進行中の面談</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><h3 style={{fontWeight:"normal", color:"#2196F3"}}>面談調整</h3></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.upper_company}</TableCell>
              <TableCell>{row.lower_company}</TableCell>
              <TableCell><ContainedButtons name="結果入力"></ContainedButtons></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
    <React.Fragment>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell><h3 style={{fontWeight:"normal", color:"#2196F3"}}>面談設定</h3></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.upper_company}</TableCell>
            <TableCell>{row.lower_company}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </React.Fragment>
    <React.Fragment>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell><h3 style={{fontWeight:"normal", color:"#2196F3"}}>面談実施</h3></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.upper_company}</TableCell>
            <TableCell>{row.lower_company}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </React.Fragment>
    </div>
    
  );
}
