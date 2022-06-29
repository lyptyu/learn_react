const CinemaReducer = (prevState = {
  list:[]
},action) => {
  let newState = {...prevState}
  switch (action.type) {
    case 'change-list':
      newState.list = action.payload
      return newState
    default:
      break;
  }
  return prevState;
}

export default CinemaReducer
