import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";
class Films extends Component {
  render() {
    return (
      <div>
        <div>Films</div>
        <div>轮播图</div>
        <div>导航栏</div>
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
