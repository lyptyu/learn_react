import React, { useRef } from 'react'

function App(props) {

  const mytext = useRef()

  const [list,setList] = React.useState(["aa","bb","cc"]);


  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  // }

  const handleAdd = () => {
    setList([...list,mytext.current.value]);
    mytext.current.value = "";
  }

  const handleDelete = (index) => {
    console.log(index)
    var newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }
  return (
    <div>
      <input  ref={mytext}/>
      <button onClick={handleAdd}>add</button>
      <ul>
        {
          list.map((item,index)=>{
            return <li key={index}>{item}
              <button onClick={()=>handleDelete(index)}>del</button>
            </li>
          })
        }
      </ul>

      {!list.length && <div>暂无待办事项</div>}
    </div>
  );
}

export default App;
