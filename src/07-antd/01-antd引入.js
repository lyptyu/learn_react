import React, {Component} from 'react';
import {Button} from "antd";

class App extends Component
{
  render()
  {
    return (
      <div>
        <Button type={"primary"} ghost danger onClick={()=>{
          console.log('aaa')
        }}>btn</Button>
      </div>
    );
  }
}

export default App;
