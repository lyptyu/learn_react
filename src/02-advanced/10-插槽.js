import React, {Component} from 'react';


class Child extends Component {
  render() {
    return (
      <div>
        child
        {/* 插槽 */}
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
      </div>
    )
  }
}

class Swiper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Swiper>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Swiper>
        <Child>
          <div>111111</div>
          <div>222222</div>
          <div>333333</div>
        </Child>
      </div>
    );
  }
}

export default App;
