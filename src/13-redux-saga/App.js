import React, {Component} from 'react';
// import './02-可执行生成器'
import store from "./redux/store";
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{
          if (store.getState().list1.length ===0 ){
            //dispath
            store.dispatch({
              type:'get-list'
            })
            console.log(store.getState().list1)
          } else {
            console.log('缓存',store.getState().list1)
          }
        }}>click-ajax-异步缓存</button>
      </div>
    );
  }
}

export default App;
