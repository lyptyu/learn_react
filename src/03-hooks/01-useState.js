import React,{useState} from 'react';

function App(){

  const [name,setName] = useState("kerwin");
  const [age,setAge] = useState(18);
  return (
    <div>
      <button onClick={()=>{
        setName("xxxxxx");
        setAge(19);
      }}>click</button>
      app - {name} - {age}
    </div>
  );
}

export default App;
