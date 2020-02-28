

// export default App;
import React from 'react';

import 'typeface-roboto';
import Sidebar from './Sidebar/Sidebar';
// import SimpleTable from "./Table";
import ClippedDrawer from "./Drawer";
import Dashboard from "./Dashboard";
class App extends React.Component{
  render() {
    return (
      <div>
        
        
        <Dashboard />
        <ClippedDrawer />
      </div>
  
    );
  }
  
}

export default App;
  
