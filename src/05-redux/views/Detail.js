import React, {useEffect} from 'react';
import store from "../redux/store";
import {hide, show} from "../redux/actionCreator/TabbarActionCreator";

function Detail(props) {

  useEffect(() => {
    // console.log('create')
    store.dispatch(hide())
    return ()=>{
      // console.log('destroy')
      store.dispatch(show())
    }
  }, []);

  return (
    <div>detail - {props.match.params.myid}</div>
    // <div>detail - {props.location.query.myid}</div>
    // <div>detail - {props.location.state.myid}</div>
  );
}

export default Detail;
