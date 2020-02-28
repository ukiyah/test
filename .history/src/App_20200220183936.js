

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
import Sidebar from './Sidebar/Sidebar';
// import SimpleTable from "./Table";
import ClippedDrawer from "./Drawer";
class App extends React.Component{
  render() {
    return (
      <div>
        
        
        
        <ClippedDrawer />
      </div>
  
    );
  }
  
}

export default App;
  
