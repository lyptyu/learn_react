import React, {Component} from 'react';

class App extends Component {
  // myusername = React.createRef()
  state = {
    username: 'kerwin',
  }
  render() {
    return (
      <div>
        <h1>登陆页</h1>
        <input type="text" value={this.state.username} onChange={ (event)=>{
          console.log('onchange', event.target.value)
          this.setState({
            username: event.target.value
          })
        } }/>
        <button onClick={()=>{
          console.log(this.state.username)
        }}>登陆</button>
        <button onClick={()=>{
          this.setState({
            username: ''
          })
        }}>重制</button>
      </div>
    );
  }
}

export default App;
