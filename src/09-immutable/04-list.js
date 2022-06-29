import React from 'react';
import {List} from 'immutable';
var arr = List([1,2,3,4,5]);
var arr2 = arr.push(4)
console.log(arr, arr2)
function App () {
  const [favor] = React.useState(List(['aa','bb','cc']));
  return (
    <div>
      {
        favor.map((item, index) =>
          <li key={index}>{item}</li>
        )
      }
    </div>
  );
}

export default App;
