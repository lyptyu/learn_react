import React, {Component} from 'react';

class App extends Component {
  a = 100
  myRef = React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myRef}/>
        <button onClick={ ()=>{
          console.log('click1',this.myRef.current.value)
        } }>add1</button>
      </div>
    );
  }
}

export default App;
