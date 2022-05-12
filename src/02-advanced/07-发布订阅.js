import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        app
      </div>
    );
  }
}

var bus = {
  list:[],
  subscribe(callback){
    console.log(callback)
    this.list.push(callback)
  },
  publish(text){
    this.list.forEach(callback=>{
      callback && callback(text)
    })
  }
}


bus.subscribe((value)=>{
  console.log(value)
})
bus.subscribe((value)=>{
  console.log(value)
})
setTimeout(()=>{
  bus.publish('hello')
},0)

//发布者


export default App;
