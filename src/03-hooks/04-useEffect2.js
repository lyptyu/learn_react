import React, {useEffect} from 'react';

function App() {
  const [name, setName] = React.useState('react');
  useEffect(()=>{
    setName(name.substring(0,1).toUpperCase() + name.substring(1));
  },[name])
  return (
    <div>
      app - {name}
      <button onClick={()=>{
        setName('xxxxxx');
      }}>click</button>
    </div>
  );
}

export default App;
