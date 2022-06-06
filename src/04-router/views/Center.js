import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Center extends Component {
  render() {
    return (
      <div>
        Center
        <div onClick={()=>{
          this.props.history.push(`/filmsorder`)
        }}>电影订单</div>
      </div>
    );
  }
}

export default withRouter(Center);
