import React, {Component} from 'react';
import styled from "styled-components";

class App extends Component {
  render() {
    const StyledButton =styled.button`
    width: 100px;
    height: 100px;
    background: yellow;
  `
    const StyledButton2 =styled(StyledButton)`
    background: red;
  `
    return (
      <div>
        <StyledButton/>
        <StyledButton2 />
      </div>
    );
  }
}

export default App;
