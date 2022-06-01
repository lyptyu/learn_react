import React from 'react';

function Detail(props) {
  return (
    <div>detail - {props.match.params.myid}</div>
    // <div>detail - {props.location.query.myid}</div>
    // <div>detail - {props.location.state.myid}</div>
  );
}

export default Detail;
