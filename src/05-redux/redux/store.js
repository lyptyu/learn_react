//1.引入redux
//2.createStore
import {applyMiddleware, combineReducers, createStore} from 'redux';
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})
const store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise));


// function createKerwinStore(reducer) {
//   var list = []
//   var state = reducer(undefined,{})
//   function subscribe(callback) {
//     list.push(callback)
//   }
//   function dispatch(action) {
//     state = reducer(state,action)
//     for (var i in list) {
//       list[i] && list[i]()
//     }
//   }
//   function getState() {
//     return state
//   }
//   return {
//     subscribe,
//     dispatch,
//     getState
//   }
// }

export default store
