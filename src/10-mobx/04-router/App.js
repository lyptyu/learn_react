import React from 'react';
import MRouter from './route/indexRouter';
import Tabbar from "./components/Tabbar";
import './views/css/App.css';
import {inject,observer} from "mobx-react";
@inject('store')
@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <MRouter>
          { this.props.store.isTabbarShow && <Tabbar/> }
        </MRouter>
      </div>
    )
  }
}

export default App;
