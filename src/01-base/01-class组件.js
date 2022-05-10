// class Test {
//   constructor() {
//     this.a = 1
//   }
//   testa() {
//     console.log('testa')
//   }
// }
//
// class ChildTest extends Test {
//   testb() {}
// }
//
// var obj = new ChildTest()
// obj.testa()
// console.log(obj.a)
import React from "react";

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}

export default App;
