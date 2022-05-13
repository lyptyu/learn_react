import React, {Component} from 'react';

class App extends Component {
  state = {
    mytext: '111'
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            mytext: '222'
          })
        }}>click</button>
        {this.state.mytext}
      </div>
    );
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount');
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 100
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

}

export default App;
