import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <div style={{background:'yellow',textAlign:'center',overflow:'hidden'}}>
        <button style={{float:'left'}}>back</button>
        <span>卖座电影</span>
        <button style={{float:'right'}} onClick={()=>{
          this.props.myevent()
        }}>center</button>
      </div>
    );
  }
}

export default Navbar;
