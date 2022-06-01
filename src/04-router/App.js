import React from 'react';
import MRouter from './route/indexRouter';
import Tabbar from "./components/Tabbar";
function App(props) {
  return (
    <div>
      <MRouter>
        <Tabbar/>
      </MRouter>
    </div>
  );
}

export default App;
