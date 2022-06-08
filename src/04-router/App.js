import React from 'react';
import MRouter from './route/indexRouter';
import Tabbar from "./components/Tabbar";
import './views/css/App.css';
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
