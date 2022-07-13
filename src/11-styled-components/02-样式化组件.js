import React, {Component} from 'react';
import styled from "styled-components";
class App extends Component {
  render() {
    const StyledChild = styled(Child)`
      background: yellow;
      color: red;
    `
    return (
      <div>
        <StyledChild/>
      </div>
    );
  }
}

function Child (props) {
  return <div className={props.className}>
    child
  </div>
}

export default App;
