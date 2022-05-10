import React, {Component} from 'react';

class App extends Component {
  // state = {
  //   mytext: '收藏',
  //   myShow: true
  // }
  constructor() {
    super();
    this.state = {
      mytext: '收藏',
      myShow: true,
      myname: 'kerwin'
    }
  }
  render() {
    return (
      <div>
        <h1>myname-{this.state.myname}</h1>
        <button onClick={()=>{
          this.setState({
            myShow: !this.state.myShow,
            myname: 'kerwin2'
          })
          if (this.state.myShow) {
            console.log('收藏的逻辑')
          } else {
            console.log('取消收藏的逻辑')
          }
        }}>{this.state.myShow?'收藏':'取消收藏'}</button>
      </div>
    );
  }
}

export default App;
