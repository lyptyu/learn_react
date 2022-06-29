import React, {useEffect} from 'react';
import store from "../mobx/store";

function Detail(props) {

  useEffect(() => {
    // console.log('create')
    store.isTabbarShow = false
    return ()=>{
      console.log('destroy')
      store.isTabbarShow = true
    }
  }, []);

  return (
    <div>detail - {props.match.params.myid}</div>
    // <div>detail - {props.location.query.myid}</div>
    // <div>detail - {props.location.state.myid}</div>
  );
}

export default Detail;
