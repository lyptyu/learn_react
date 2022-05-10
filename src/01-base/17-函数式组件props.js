import React, {Component} from 'react';
import Navbar from "./Navbar";
import SideBar from "./Sidebar";
class App extends Component {
  render() {
    return (
      <div>
        {/*类组件*/}
        <Navbar title={'导航'}/>
        {/*函数组件*/}
        <SideBar bg={'yellow'} position={'right'}/>
      </div>
    );
  }
}
//Sidebar.defaultProps
//Sidebar.propTypes
export default App;
