import React, {Component} from 'react';
import BetterScroll from 'better-scroll';
class App extends Component {
  state = {
    list:[]
  }
  render() {
    return (
      <div>
        <button onClick={ ()=>this.getData() }>click</button>
        <div className="kerwinwrapper" style={{height:'200px',background:"yellow",overflow: "hidden"}}>
          <ul className="kerwincontent">
            {
              this.state.list.map(item=>{
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
  getData = () => {
    var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // this.setState({
    //   list
    // },()=>{
    //   new BetterScroll('.kerwinwrapper')
    // })
    setTimeout(()=>{
      this.setState({
        list
      })
      new BetterScroll('.kerwinwrapper')
    },0)
  }
}

export default App;
