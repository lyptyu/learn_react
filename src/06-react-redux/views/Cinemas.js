import React, {useEffect} from 'react';
import getCinemaListAction from '../redux/actionCreator/getCinemaAction'
import {connect} from "react-redux";
function Cinemas(props) {
  const {list,getCinemaListAction} = props
  useEffect(()=>{
    if (!list.length) {
      //ajax
      getCinemaListAction()
    } else {
      console.log('store缓存')
    }
  },[list,getCinemaListAction])

  return (
    <div>
      <div style={{overflow:"hidden"}}>
        <div onClick={()=>{
          props.history.push(`/city`)
        }} style={{float:'left'}}>{props.cityName}</div>
        <div onClick={()=>{
          props.history.push(`/cinemas/search`)
        }} style={{float:'right'}}>搜索</div>
      </div>
      {
        props.list.map((item,) => {
          return <dl key={item.cinemaId} style={{padding:"10px"}}>
            <dt>{item.name}</dt>
            <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
          </dl>
        })
      }
    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  }
}
const mapDispatchToProps = {
  getCinemaListAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinemas);
