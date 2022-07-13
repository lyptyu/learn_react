import React, {Component} from 'react';
import styled from "styled-components";
class App extends Component {
  render() {
    const StyledInput = styled.input`
      outline: none;
      border-radius: 10px;
      border-bottom: 1px solid red;
    `

    const StyledDiv = styled.div`
      background: ${props => props.bg || 'yellow'};
      width: 100px;
      height: 100px;
    `
    return (
      <div>
        App
        <StyledInput type={'password'}/>
        <StyledDiv bg={'red'}/>
      </div>
    );
  }
}

export default App;
