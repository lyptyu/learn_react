import React from 'react';
import {List,Map} from "immutable";

function App(props) {
  const [info, setInfo] = React.useState(Map({
    name:'kerwin',
    location:Map({
      province:'辽宁',
      city:'大连'
    }),
    favor:List(["读书","看报","写代码"])
  }))
  return (
    <div>
      <h1>个人信息修改</h1>
      <button onClick={()=>{
        setInfo(info.set('name','xiaoming').set('location',info.get('location').set('city','沈阳')))
      }}>修改</button>
      <div>
        {info.get('name')}
        <br/>
        {info.get('location').get('province')} - {info.get('location').get('city')}
        <br/>
        {
          info.get('favor').map((item,index)=><li onClick={()=>{
            setInfo(info.set('favor',info.get('favor').delete(index)))
          }} key={item}>{item}<button>del</button></li>)
        }
      </div>
    </div>
  );
}

export default App;
