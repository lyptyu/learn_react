import React, {Component} from 'react';
import axios from "axios";
import BetterScroll from "better-scroll";
class App extends Component {
  state = {
    myname:'kerwin',
    list:[]
  }

  componentDidMount() {
    axios.get('/test.json').then(res => {
      console.log(res.data.data.films);
      this.setState({
        list: res.data.data.films
      })
    })
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={
          ()=>{
            this.setState({
              myname:'铁锤'
            })
          }
        }>click</button>
        <span id={'myname'}>{this.state.myname}</span>
        <div id={'wrapper'} style={{
          height:'100px',
          overflow:'hidden',
          background:'yellow'
        }}>
          <ul>
            {
              this.state.list.map((item,index) => {
                return <li key={item.filmId}>{item.name}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate', document.getElementById('myname').innerHTML);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', document.getElementById('myname').innerHTML);
    console.log(prevState.list.length)
    if (!prevState.list.length){
      console.log('better-scroll');
      new BetterScroll('#wrapper')
    }

  }
}

export default App;
