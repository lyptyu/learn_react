import React, {useEffect} from 'react';
import MRouter from './route/indexRouter';
import Tabbar from "./components/Tabbar";
import './views/css/App.css';
import {autorun} from "mobx";
import store from "./mobx/store";
function App(props) {
  const [isShow, setIsShow] = React.useState(true);
  useEffect(()=>{
    autorun(()=>{
      setIsShow(store.isTabbarShow)
    })
  })
  return (
    <div>
      <MRouter>
        { isShow && <Tabbar/> }
      </MRouter>
    </div>
  );
}

export default App;
