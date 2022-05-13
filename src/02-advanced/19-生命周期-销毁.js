import React, {Component} from 'react';

class App extends Component {
  state = {
    isCreated: true
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            isCreated: !this.state.isCreated
          })
        }}>
          销毁
        </button>
        {this.state.isCreated && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  render (){
    return (
      <div>child</div>
    )
  }

  componentDidMount() {
    window.onresize = () => {
      console.log('resize')
    }
   this.timer = setInterval(() => {
      console.log('setInterval')
    }, 1000)
  }


  componentWillUnmount() {
    console.log('child will unmount')
    window.onresize = null
    clearInterval(this.timer)
  }
}

export default App;
