import React from 'react';
import 'typeface-roboto';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import p_list_proposal from "./proposal/list_proposal";
import Dashboard from "./Dashboard";


class App extends React.Component{

  render() {
    return (
      <div>
        
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/list_proposal" component={p_list_proposal} />
          </div>
        </BrowserRouter>
        {/* <ClippedDrawer /> */}
      </div>
    );
  }
  
}

export default App;
  
