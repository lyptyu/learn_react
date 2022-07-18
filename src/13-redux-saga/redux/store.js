import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import createSagaMiddleWare from 'redux-saga'
import {watchSaga} from "./saga";
const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(reducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watchSaga)
export default store
