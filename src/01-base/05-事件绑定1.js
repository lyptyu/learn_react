import React, {Component} from 'react';

class App extends Component {
  a = 100
  render() {
    return (
      <div>
        <input type="text"/>
        <button onClick={ ()=>{
          console.log('click1')
        } }>add1</button>
        <button onClick={ this.handleClick2 }>add2</button>
        <button onClick={ this.handleClick3 }>add3</button>
      </div>
    );
  }

  handleClick2() {
    console.log('click2')
  }

  handleClick3 = () => {
    console.log('click3')
  }
}

export default App;
