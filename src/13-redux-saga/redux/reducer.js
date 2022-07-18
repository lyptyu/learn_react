function reducer(prevState={
  list1: []
},action={}){
  var newState = {...prevState}
  switch (action.type) {
    case 'change-list':
      console.log('action',action)
      newState.list1 = action.payload
      return newState
    default:
      return prevState
  }
}

export default reducer;
