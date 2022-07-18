import React, {Component} from 'react';

class App extends Component {
  state = {
    text: '',
    list: ["1", "2", "3"],
  }
  render() {
    return (
      <div>
        <h1>todo</h1>
        input: <input type="text" onChange={(event)=>{
          this.setState({text: event.target.value})
      }}/>
        <button className={'add'} onClick={()=>{
          this.setState({list: [...this.state.list, this.state.text]})
        }}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item} <button className={'del'} onClick={()=>{
                var newList = this.state.list;
                newList.splice(index, 1);
                this.setState({list: newList})
              }}>del</button> </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
