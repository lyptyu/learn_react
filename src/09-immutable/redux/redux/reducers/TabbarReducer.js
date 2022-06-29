import {fromJS} from "immutable";

const TabbarReducer = (prevState = fromJS({
  show:true
}),action) => {
  // let newState = {...prevState}
  switch (action.type) {
    case 'kerwinhide-tabbar':
      // newState.show = false
      return prevState.set('show',false)
    case 'kerwinshow-tabbar':
      // newState.show = true
      return prevState.set('show',true)
    default:
      break;
  }
  return prevState;
}


export default TabbarReducer
