import React, {Component} from 'react';

class App extends Component {
  state = {
    html: '<b>Hello World</b>'
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.state.html}}></div>
      </div>
    );
  }
}

export default App;
