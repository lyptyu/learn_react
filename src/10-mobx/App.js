import React, {Component} from 'react';
import {observable,autorun} from "mobx";

// let observableNumber = observable.box(10);
// let observableName = observable.box('kerwin');
// autorun(()=>{
//   console.log(observableNumber.get());
//   // console.log(observableName.get());
// })
//
// autorun(()=>{
//   // console.log(observableNumber.get());
//   console.log(observableName.get());
// })
//
// setTimeout(()=>{
//   observableNumber.set(20);
//   // observableName.set('kerwin2');
// },1500)
//
// setTimeout(()=>{
//   // observableNumber.set(20);
//   observableName.set('kerwin2');
// },3000)

let myobj = observable({
  name:'kerwin',
  age:100
})
autorun(()=>{
  console.log(myobj.name)
})
setTimeout(()=>{
  myobj.name='xiaoming'
},2000)
class App extends Component {
  render() {
    return (
      <div>
        app
      </div>
    );
  }
}

export default App;
