import React, {useEffect} from 'react';

function Detail(props) {

  useEffect(() => {
    // console.log('create')
    return ()=>{
      console.log('destroy')
    }
  }, []);

  return (
    <div>detail - {props.match.params.myid}</div>
    // <div>detail - {props.location.query.myid}</div>
    // <div>detail - {props.location.state.myid}</div>
  );
}

export default Detail;
