import React from 'react';
import 'typeface-roboto';
import ClippedDrawer from "./Drawer";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import SimpleTable from "./Table";
import Dashboard from "./Dashboard";


class App extends React.Component{

  render() {
    return (
      <div>
        
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <ClippedDrawer />
            <Route path="/table" component={SimpleTable} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
  
