import React,{useEffect} from 'react';
import store from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaAction";

function Search(props) {
  const [cityName] = React.useState(store.getState().CityReducer.cityName);
  const [cinemaList,setCinemaList] = React.useState(store.getState().CinemaListReducer.list);
  const [mytext, setText] = React.useState('')
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

  const getCinemaList = React.useMemo(() => {
    return cinemaList.filter((item, index) => {
      return item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())
    })
  }, [mytext, cinemaList])

  return (
    <div>
      {cityName}
      <input type="text" value={mytext} onChange={(event)=>{
        setText(event.target.value)
      }}/>
      {
        getCinemaList.map((item,) => {
          return <dl key={item.cinemaId} style={{padding:"10px"}}>
            <dt>{item.name}</dt>
            <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
          </dl>
        })
      }
    </div>
  );
}

export default Search;
