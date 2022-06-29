import React, {useEffect} from 'react';
import MRouter from './route/indexRouter';
import Tabbar from "./components/Tabbar";
import './views/css/App.css';
import {connect} from "react-redux";
import './util/request'
function App(props) {
  // const [isShow, setIsShow] = React.useState(true);
  useEffect(()=>{

    // store.subscribe(()=>{
    //   setIsShow(store.getState().TabbarReducer.show)
    // })
  },[])
  return (
    <div>
      <MRouter>
        { props.isShow && <Tabbar/> }
      </MRouter>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    isShow: state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App);
