import React, {useEffect} from 'react';
import store from "../redux/store";
import getCinemaListAction from '../redux/actionCreator/getCinemaAction'
function Cinemas(props) {
  const [cityName] = React.useState(store.getState().CityReducer.cityName);
  const [cinemaList,setCinemaList] = React.useState(store.getState().CinemaListReducer.list);
  useEffect(()=>{
    if (!store.getState().CinemaListReducer.list.length) {
      //ajax
      store.dispatch(getCinemaListAction())
    } else {
      console.log('store缓存')
    }

    const unsubscribe = store.subscribe(()=>{
      setCinemaList(store.getState().CinemaListReducer.list)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  return (
    <div>
      <div style={{overflow:"hidden"}}>
        <div onClick={()=>{
          props.history.push(`/city`)
        }} style={{float:'left'}}>{cityName}</div>
        <div onClick={()=>{
          props.history.push(`/cinemas/search`)
        }} style={{float:'right'}}>搜索</div>
      </div>
      {
        cinemaList.map((item,) => {
          return <dl key={item.cinemaId} style={{padding:"10px"}}>
            <dt>{item.name}</dt>
            <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
          </dl>
        })
      }
    </div>
  );
}

export default Cinemas;
