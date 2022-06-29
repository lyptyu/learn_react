import React, {useEffect} from 'react';
import store from "../mobx/store";

function Detail(props) {

  useEffect(() => {
    // console.log('create')
    store.changeHide()
    return ()=>{
      console.log('destroy')
      store.changeShow()
    }
  }, []);

  return (
    <div>detail - {props.match.params.myid}</div>
    // <div>detail - {props.location.query.myid}</div>
    // <div>detail - {props.location.state.myid}</div>
  );
}

export default Detail;
