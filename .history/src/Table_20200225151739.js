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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});

const drawerWidth = 240;
const useStyles2 = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));
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
  const classes2 = useStyles2();
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

