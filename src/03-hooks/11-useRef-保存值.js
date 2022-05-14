import { useRef, useState } from 'react'

function App(){
  const [count, setCount] = useState(0);
  var mycount = useRef(0)

  return (
    <div>
      <button onClick={ ()=>{
        setCount(count + 1);
        mycount.current ++
      }}>add</button>
      {count} - {mycount.current}
    </div>
  )
}

export default App
