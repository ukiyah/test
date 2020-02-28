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
import list_appointment from "./appointment/list_appointment";
import list_daily_report from "./daily_report/list_daily_report";
import form_daily_report from "./daily_report/form_daily_report";
import form_proposal from "./proposal/form_proposal";
import form_appointment from "./appointment/appointment/form_appointment.jsx";
import form_visit from "./appointment/visit/form_visit";
import form_arrange_interview from "./interview/arrange/form_arrange_interview";
import form_confirm_interview from "./interview/confirm/form_confirm_interview";
import form_complete_interview from "./interview/complete/form_complete_interview";
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
            <Route path="/list_appointment" component={list_appointment} />
            <Route path="/list_daily_report" component={list_daily_report} />
            <Route path="/form_daily_report" component={form_daily_report} />
            <Route path="/form_proposal" component={form_proposal} />
            <Route path="/form_appointment" component={form_appointment} />
            <Route path="/form_visit" component={form_visit} />
         </div>
        </BrowserRouter>
        {/* <ClippedDrawer /> */}
      </div>
    );
  }
  
}

export default App;
  
