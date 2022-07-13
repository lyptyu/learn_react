import React, {Component} from 'react';
import styled,{keyframes} from "styled-components";
class App extends Component {

  render() {
    const myanimation = keyframes`
    from {
      transform: rotate(0deg);
    }
      to{
        transform: rotate(360deg);
      }
    `
    const StyleDiv = styled.div`
      width: 100px;
      height: 100px;
      background: yellow;
      animation: ${myanimation} 1s infinite;
  `
    return (
      <div>
        <StyleDiv/>
      </div>
    );
  }
}

export default App;
