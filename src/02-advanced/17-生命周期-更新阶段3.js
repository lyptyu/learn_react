import React, { Component } from 'react'

class Child extends Component {

  state = {
    title:''
  }

  render() {
    return (
      <div>child-{this.state.title}</div>
    )
  }

  componentWillReceiveProps (nextProps) {
    console.log('child componentWillReceiveProps', this.props,nextProps)
    this.setState({
      title:nextProps.text + 'kerwin'
    })
  }

}

class App extends Component {
  state = {
    text:'11111'
  }
  render () {
    return (
      <div>
        {this.state.text}
        <button onClick={()=>{
          this.setState({
            text:'22222'
          })
        }}>click</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}

export default App
