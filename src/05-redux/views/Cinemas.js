import React from 'react';
import store from "../redux/store";

function Cinemas(props) {
  const [cityName] = React.useState(store.getState().CityReducer.cityName);
  return (
    <div>
      <div onClick={()=>{
        props.history.push(`/city`)
      }}>{cityName}</div>
      Cinemas
    </div>
  );
}

export default Cinemas;
