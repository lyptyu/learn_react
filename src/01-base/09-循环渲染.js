import React, {Component} from 'react';

class App extends Component {
  state = {
    list: ['1111','2222','3333']
  }
  render() {

    return (
      <div>
        <ul>
          {this.state.list.map(item=><li key={item}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default App
