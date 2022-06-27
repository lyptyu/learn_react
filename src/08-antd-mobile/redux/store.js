//1.引入redux
//2.createStore
import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import { persistStore,persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'kerwin',
  storage: storage,
  whitelist:['CityReducer']
}


const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)));
const persistor = persistStore(store);

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

export {store,persistor}
export default store
