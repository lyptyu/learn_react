const CityReducer = (prevState = {
  cityName: '北京'
},action) => {
  let newState = {...prevState}
  switch (action.type) {
    case 'change-city':
      newState.cityName = action.payload
      return newState
    default:
      break;
  }
  return prevState;
}

export default CityReducer
