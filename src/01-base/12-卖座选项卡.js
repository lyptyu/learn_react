import React, {Component} from 'react';
import './css/02-卖座.css'

import Firm from './maizuocomponents/Firm'
import Cinema from "./maizuocomponents/Cinema";
import Center from "./maizuocomponents/Center";

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
        <ul>
          {
            this.state.list.map((item,index) =>
              <li onClick={()=>this.handleClick(index)} className={ this.state.current === index ? 'active' : undefined } key={item.id}>{item.text}</li>
            )
          }
        </ul>
      </div>
    );
  }
  handleClick = (index) => {
    console.log(index)
    this.setState({
      current: index
    })
  }
}

export default App;
