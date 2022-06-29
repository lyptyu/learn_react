import React, {useEffect} from 'react';
import MRouter from './route/indexRouter';
import Tabbar from "./components/Tabbar";
import './views/css/App.css';
import store from "./redux/store";
function App(props) {
  const [isShow, setIsShow] = React.useState(store.getState().TabbarReducer.get('show'));
  useEffect(()=>{
    store.subscribe(()=>{
      setIsShow(store.getState().TabbarReducer.get('show'))
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
