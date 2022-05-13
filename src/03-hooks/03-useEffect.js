import React, {useEffect, useState} from 'react';
import axios from "axios";
function App(props) {

  const [list, setList] = useState([]);

  // axios.get("/test.json").then(res => {
  //   console.log(res.data);
  //   setList(res.data.data.films);
  // })

  useEffect(()=>{
    axios.get("/test.json").then(res => {
      console.log(res.data);
      setList(res.data.data.films);
    })
  },[])

  return (
    <div>
      app
      {
        list.map((item, index) => {
          return <li key={item.filmId}>{item.name}</li>
        })
      }
    </div>
  );
}

export default App;
