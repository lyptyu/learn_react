import React, {Component} from 'react';
import {Map} from 'immutable';

var obj= {
  name:'kerwin',
  age:100
}

var oldImmuObj = Map(obj);
var newImmuObj = oldImmuObj.set('name','xiaoming');
console.log(oldImmuObj)
console.log(newImmuObj)

console.log(oldImmuObj.get('name'),newImmuObj.get('name'))
console.log(oldImmuObj.toJS(),newImmuObj.toJS())
class App extends Component {
  state = {
    info:{
      name:'kerwin',
      age:100
    }
  }
  render() {
    return (
      <div>
        app -
        <button onClick={()=>{
          var old = Map(this.state.info);
          var newImmu = old.set('name','xiaoming').set('age',200);
          this.setState({
            info:newImmu.toJS()
          })
        }}>click</button>
        {this.state.info.name} -
        {this.state.info.age}
      </div>
    );
  }
}

export default App;
