import React, {Component} from 'react';
import store from "../redux/store";

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
            store.dispatch({
              type:'change-city',
              payload:item
            })
            this.props.history.goBack()
          }} key={item}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default City;
