import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";
import axios from "axios";
import style from './css/Flims.module.css'
import {Swiper} from "antd-mobile";

class Films extends Component {
  componentDidMount() {
    axios({
      method: 'get',
      url:'/ajax/comingList?ci=62&limit=10&movieIds=&token=&optimus_uuid=3D40F0C0E62411EC9484CD3F2669A7978DF7E796F09C489CA9A3D10C1CD20271&optimus_risk_level=71&optimus_code=10',
      headers:{
        contentType:'application/json;charset=UTF-8'
      }
    }).then(res => {
      console.log('res', res)
    })
  }

  render() {
    return (
      <div>
        <Swiper autoplay={true} loop={true}>
          {['green','red','blue'].map((item,index)=>{
            return <Swiper.Item key={index} style={{width:'100%',height:'250px',background: item}}>{item}</Swiper.Item>
          })}
        </Swiper>
        <ul>
          <li>
            <NavLink activeClassName={style.kerwinactive} to="/films/nowplaying">正在热映</NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.kerwinactive} to="/films/commingsoon">即将上映</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/films/nowplaying' component={NowPlaying}></Route>
          <Route path='/films/commingsoon' component={ComingSoon}></Route>
          <Redirect from="/films" to="/films/nowplaying"/>
        </Switch>
      </div>
    );
  }
}

export default Films;
