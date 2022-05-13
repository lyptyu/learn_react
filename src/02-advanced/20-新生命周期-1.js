import React, {Component} from 'react';

class App extends Component {
  state = {
    myname:'kerwin',
    myAge:18
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return {
      myname:state.myname.substring(0,1).toUpperCase() + state.myname.substring(1)
    }
  }

  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            myname:'xiaoming'
          })
        }}>click</button>
        app-{this.state.myname}-{this.state.myAge}
      </div>
    );
  }
}

export default App;
