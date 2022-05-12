import React, {Component} from 'react';


class Field extends Component {
  state = {
    value:''
  }

  clear = () => {
    this.setState({
      value:''
    })
  }
  render() {
    return (
      <div style={{background:'yellow'}}>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(event)=>{
          this.setState({
            value:event.target.value
          })
        }} value={this.state.value}/>
      </div>
    )
  }
}

class App extends Component {

  state = {

  }

  username = React.createRef();
  password = React.createRef();
  render() {
    return (
      <div>
        <h1>登陆界面</h1>
        <Field label={'用户名'} type={'text'} ref={this.username}/>
        <Field label={'密码'} type={'text'} ref={this.password} />
        <button onClick={()=>{
          console.log(this.username.current.state.value);
          console.log(this.password.current.state.value);
        }}>登陆</button>
        <button onClick={()=>{
          this.username.current.clear();
          this.password.current.clear();
        }}>重置</button>
      </div>
    );
  }
}

export default App;
