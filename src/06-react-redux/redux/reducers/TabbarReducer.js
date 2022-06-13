const TabbarReducer = (prevState = {
  show:true
},action) => {
  let newState = {...prevState}
  switch (action.type) {
    case 'kerwinhide-tabbar':
      newState.show = false
      return newState
    case 'kerwinshow-tabbar':
      newState.show = true
      return newState
    default:
      break;
  }
  return prevState;
}


export default TabbarReducer
