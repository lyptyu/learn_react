import React, {useEffect} from 'react';
import MRouter from './route/indexRouter';
import Tabbar from "./components/Tabbar";
import './views/css/App.css';
import store from "./redux/store";
function App(props) {
  const [isShow, setIsShow] = React.useState(true);
  useEffect(()=>{
    store.subscribe(()=>{
      console.log('app订阅',store.getState())
      setIsShow(store.getState().TabbarReducer.show)
    })
  },[])
  return (
    <div>
      <MRouter>
        { isShow && <Tabbar/> }
      </MRouter>
    </div>
  );
}

export default App;
