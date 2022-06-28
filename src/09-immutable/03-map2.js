import React, {Component} from 'react';
import {Map} from 'immutable';
class App extends Component {
    state = {
      info: Map({
        name: 'kerwin',
        select: 'aa',
        filter: Map({
          text: '',
          up: true,
          down: false
        })
      }),
    }
    componentDidMount() {
      console.log(this.state.info.get('filter'))
    }
    render() {
      return (
        <div>
          {this.state.info.get('name')}
          <button onClick={()=>{
            this.setState({
              info: this.state.info.set('name','xiaoming')
            })
          }}>click</button>
          <Child filter={this.state.info.get('filter')}/>
        </div>
      );
    }
}
class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.filter === nextProps.filter) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('child update')
  }

  render() {
    return <div>
      child
    </div>
  }
}
export default App;
