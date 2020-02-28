import React from 'react';
import 'typeface-roboto';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import list_proposal from "./proposal/list_proposal";
import Dashboard from "./Dashboard";
import list_interview from "./interview/list_interview";
import list_closing from "./closing/list_closing";
class App extends React.Component{

  render() {
    return (
      <div>
        
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/list_proposal" component={list_proposal} />
            <Route path="/list_interview" component={list_interview} />
            <Route path="/list_closing" component={list_closing} />
          </div>
        </BrowserRouter>
        {/* <ClippedDrawer /> */}
      </div>
    );
  }
  
}

export default App;
  
