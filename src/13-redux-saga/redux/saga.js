import {take, fork, call, put} from 'redux-saga/effects'
export function *watchSaga() {
  while(true) {
    yield take('get-list')

    yield fork(getList)
  }
}

function *getList() {
  let res = yield call(getListAction)
  yield put({
    type:'change-list',
    payload: res
  })
}

function getListAction() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(['1111','2222','3333'])
    },1000)
  })
}
