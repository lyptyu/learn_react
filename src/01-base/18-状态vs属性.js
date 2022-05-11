import React, {Component} from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child-{this.props.text}</h1>
        <button onClick={()=>{this.props.text = '' /*报错*/}}>child click</button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    text: '11111'
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            text: '22222'
          })
        }}>click-f</button>
        <Child text={this.state.text}/>
      </div>
    );
  }
}

export default App;
