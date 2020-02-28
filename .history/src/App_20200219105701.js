// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import 'typeface-roboto';

// function App() {
//   return (
//     <div>
//       <h1>hello</h1>
//       <Button variant="contained" color="primary">
//         Hello World
//       </Button>
//       <table>
//         <tr><td>日付</td><td>会社</td></tr>
//       </table>
//     </div>
    
    
//   );
// }


// export default App;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
      <h1>提案一覧</h1>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell align="right">上位企業</TableCell>
            <TableCell align="right">下位企業</TableCell>
            <TableCell align="right">結果</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">株式会社ABC</TableCell>
              <TableCell align="right">株式会社スクラム</TableCell>
              <TableCell align="right">
                <Button className="button" variant="contained" color="primary" variant="contained" color="primary" disableElevation>成功</Button>
                <Button variant="contained" color="primary" disableElevation>失敗</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick = {()=>{
      console.log("hello happy people");
    }}>button</Button>
    </div>
    
  );
}