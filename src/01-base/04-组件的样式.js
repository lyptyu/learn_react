import React, {Component} from 'react';
import './css/01-index.css'
class App extends Component
{
  render() {
    var myname = '张三';
    var obj = {
      backgroundColor: 'yellow',
      fontSize: '30px'
    }
    return (
      <div>
        {10 + 20} - {myname} - {10 > 20 ? 'aa' : 'bb'}
        <div style={obj}>1111111</div>
        {/*React推荐行内样式，因为每个组件是个独立的整体*/}
        <div style={{background:'red'}}>2222222</div>

        <div className="active">3333333</div>
        <label htmlFor="username">用户名:</label>
        <input type="text" id="username"/>
      </div>
    );
  }
}

export default App;
