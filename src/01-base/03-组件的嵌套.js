import React, {Component} from 'react';

class Child extends Component {
  render() {
    return (
      <div>Child</div>
    )
  }
}

class Navbar extends Component {
  render () {
    return (
      <div>
        navbar
        <Child/>
      </div>
    )
  }
}

function Swiper () {
  return (
    <div>swiper</div>
  )
}

const Tabbar = () => (
  <div>tabbar</div>
)

class App extends Component {
  render()
  {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    );
  }
}

export default App;
