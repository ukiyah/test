import React from 'react';
import 'typeface-roboto';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Table from "./Table";
import Dashboard from "./Dashboard";


class App extends React.Component{

  render() {
    return (
      <div>
        
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/table" component={Table} />
          </div>
        </BrowserRouter>
        {/* <ClippedDrawer /> */}
      </div>
    );
  }
  
}

export default App;
  
