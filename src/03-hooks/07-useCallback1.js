import {useState} from "react";

function App(){
  const [count, setCount] = useState(0);
  var mycount = 0

  return (
    <div>
      <button onClick={ ()=>{
        setCount(count + 1);
        mycount ++
      }}>add</button>
      {count} - {mycount}
    </div>
  )
}

export default App
