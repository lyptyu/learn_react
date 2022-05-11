import React, {Component} from 'react';

class App extends Component {
  myusername = React.createRef()
  render() {
    return (
      <div>
        <h1>登陆页</h1>
        <input type="text" ref={this.myusername} defaultValue={'kerwin'}/>
        <button onClick={()=>{
          console.log(this.myusername.current.value)
        }}>登陆</button>
        <button onClick={()=>{
          this.myusername.current.value = ''
        }}>重制</button>
      </div>
    );
  }
}

export default App;
