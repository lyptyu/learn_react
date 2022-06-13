import React, {useEffect} from 'react';
// import store from "../redux/store";
import {hide, show} from "../redux/actionCreator/TabbarActionCreator";
import {connect} from "react-redux";

function Detail(props) {
  const {show,hide} = props
  useEffect(() => {
    // console.log('create')
    // store.dispatch(hide())
    hide()
    return ()=>{
      // console.log('destroy')
      // store.dispatch(show())
      show()
    }
  }, [show,hide]);

  return (
    <div>detail - {props.match.params.myid}</div>
    // <div>detail - {props.location.query.myid}</div>
    // <div>detail - {props.location.state.myid}</div>
  );
}
const mapDispatchToProps = {
  show,
  hide
}
export default connect(null,mapDispatchToProps)(Detail);
