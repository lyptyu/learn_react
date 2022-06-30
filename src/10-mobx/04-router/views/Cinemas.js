import React, {useEffect} from 'react';
import store from "../mobx/store";
// import {autorun} from "mobx";
import {inject, Observer} from "mobx-react";
function Cinemas(props) {
  // const [cityName] = React.useState('');
  // const [cinemaList,setCinemaList] = React.useState([]);
  useEffect(()=>{
    // ajax
    if (!store.list.length) {
      store.getList()
    }
    // const unsubscribe = autorun(()=>{
    //   setCinemaList(store.list)
    // })
    return ()=>{
      // unsubscribe()
    }
  },[])

  return (
    <div>
      <Observer>
        {
          ()=> props.store.list.map((item) => {
            return <dl key={item.cinemaId} style={{padding:"10px"}}>
              <dt>{item.name}</dt>
              <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
            </dl>
          })
        }
      </Observer>
    </div>
  );
}

export default inject('store')(Cinemas);
