import React, {Component} from 'react';
import './css/02-卖座.css'

import Firm from './maizuocomponents2/Firm'
import Cinema from "./maizuocomponents2/Cinema";
import Center from "./maizuocomponents2/Center";
import Tabbar from "./maizuocomponents2/Tabbar";
import Navbar from "./maizuocomponents2/Navbar";
class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      },
    ],
    current: 0
  }
  which = () => {
    switch (this.state.current){
      case 0:
        return <Firm/>;
      case 1:
        return <Cinema/>;
      case 2:
        return <Center/>;
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        <Navbar myevent={()=>{
          console.log('点击了导航栏')
          this.setState({
            current: 2
          })
        }}/>
        {/*{*/}
        {/*  this.state.current ===0 && <Firm/>*/}
        {/*}*/}
        {/*{*/}
        {/*  this.state.current ===1 && <Cinema/>*/}
        {/*}*/}
        {/*{*/}
        {/*  this.state.current ===2 && <Center/>*/}
        {/*}*/}
        {
          this.which()
        }
        <Tabbar myevent={(index)=>{this.setState({current:index})}} current={this.state.current} list={this.state.list}/>
      </div>
    );
  }
  // handleClick = (index) => {
  //   console.log(index)
  //   this.setState({
  //     current: index
  //   })
  // }
}

export default App;
