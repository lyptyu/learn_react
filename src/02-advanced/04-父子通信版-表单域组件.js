import React, {Component} from 'react';


class Field extends Component {
  render() {
    return (
      <div style={{background:'yellow'}}>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(evt)=>{
          this.props.onChangeEvent(evt.target.value);
        }} value={this.props.value}/>
      </div>
    )
  }
}

class App extends Component {

  state = {
    username:localStorage.getItem('username') || '',
    password:localStorage.getItem('password') || '',
  }

  render() {
    return (
      <div>
        <h1>登陆界面</h1>
        <Field label={'用户名'} type={'text'} onChangeEvent={(value)=>{
          this.setState({
            username:value
          })
        }} value={this.state.username}/>
        <Field label={'密码'} type={'password'} onChangeEvent={(value)=>{
          this.setState({
            password:value
          })
        }} value={this.state.password}/>
        <button onClick={()=>{
          console.log(this.state.username,this.state.password)
        }}>登陆</button>
        <button onClick={()=>{
          this.setState({
            username:'',
            password:''
          })
        }}>重置</button>
      </div>
    );
  }
}

export default App;
