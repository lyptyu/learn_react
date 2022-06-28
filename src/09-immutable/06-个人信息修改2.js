import React from 'react';
import {fromJS} from "immutable";

function App(props) {
  const [info, setInfo] = React.useState(fromJS({
    name:'kerwin',
    location:({
      province:'辽宁',
      city:'大连'
    }),
    favor:(["读书","看报","写代码"])
  }))
  console.log(info)
  return (
    <div>
      <h1>个人信息修改</h1>
      <button onClick={()=>{
        setInfo(info.setIn(['name'],'xiaoming').setIn(['location','city'],'北京'))
      }}>修改</button>
      <div>
        {info.get('name')}
        <br/>
        {info.get('location').get('province')} - {info.get('location').get('city')}
        <br/>
        {
          info.get('favor').map((item,index)=><li onClick={()=>{
            // setInfo(info.setIn(['favor',index],'修改'))
            setInfo(info.deleteIn(['favor',index]))
          }} key={item}>{item}<button>del</button></li>)
        }
      </div>
    </div>
  );
}

export default App;
