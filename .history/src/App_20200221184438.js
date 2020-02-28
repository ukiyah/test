import React from 'react';
import 'typeface-roboto';

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
  
