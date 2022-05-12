import React, {Component} from 'react';

class Box extends Component {
  render() {
    console.log('render')
    return <div style={{width:'100px',height:'100px',border:this.props.current === this.props.index ? '1px solid red' : '1px solid grey',margin:'10px',float:'left'}}>

    </div>
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.current === this.props.index || nextProps.current === nextProps.index

  }
}

class App extends Component {
  state = {
    list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
    current: 0
  }
  render() {
    return (
      <div>
        <input type="number" onChange={(event)=>{
          this.setState({
            current: +event.target.value
          })
        }} value={this.state.current}/>
        <div style={{clear:"both"}}>
          {
            this.state.list.map((item,index)=>(
              <Box key={item} current={this.state.current} index={index}></Box>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
