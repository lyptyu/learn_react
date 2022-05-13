import React, { PureComponent } from 'react';

class App extends PureComponent {
  state = {
    myname:'kerwin'
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            myname:'xxxxxx'
          })
        }}>click</button>
        {this.state.myname}
      </div>
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return JSON.stringify(this.state) !== JSON.stringify(nextState);
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }
}

export default App;
