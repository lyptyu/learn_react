import React, {Component} from 'react';
import {connect} from "react-redux";

class City extends Component {
  state = {
    list:['北京','上海','深圳','广州']
  }
  render() {
    return (
      <div>
        city
        <ul>
          {this.state.list.map(item=><li onClick={()=>{
            this.props.change(item)
            this.props.history.goBack()
          }} key={item}>{item}</li>)}
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = {
  change (item) {
    return {
      type:'change-city',
      payload:item
    }
  }
}
export default connect(null,mapDispatchToProps)(City);
