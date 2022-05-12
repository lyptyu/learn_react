import React, {Component} from 'react';

class App extends Component {
  state = {
    myname: 'kerwin'
  }
  UNSAFE_componentWillMount() { //初始化数据，不安全，有可能被打断，然后再重新执行
    console.log('componentWillMount', this.state.myname,document.getElementById('myname'));
    this.setState({
      myname: 'Kerwin'
    })
  }
  componentDidMount() { //初始化完成，数据请求，订阅函数调用，setInterval，基于创建完的dom进行初始化  betterscroll
    console.log('componentDidMount', this.state.myname,document.getElementById('myname'));
  }

  render() {
    console.log('render');
    return (
      <div>
        <span id={'myname'}>{this.state.myname}</span>
      </div>
    );
  }
}

export default App;
