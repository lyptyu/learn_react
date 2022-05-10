import React, {Component} from 'react';

class App extends Component {
  state = {
    count : 1
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    );
  }
  handleAdd1 = () => {
    this.setState({
      count: this.state.count + 1
    },()=>{
      console.log(this.state.count)
    });
    this.setState({
      count: this.state.count + 1
    },()=>{
      console.log(this.state.count)
    });
    this.setState({
      count: this.state.count + 1
    },()=>{
      console.log(this.state.count)
    });
  }

  handleAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      },()=>{
        console.log(this.state.count)
      });
      this.setState({
        count: this.state.count + 1
      },()=>{
        console.log(this.state.count)
      });
      this.setState({
        count: this.state.count + 1
      },()=>{
        console.log(this.state.count)
      });
    })
  }
}

export default App
