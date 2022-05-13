import React, {useCallback} from 'react';

function App(props) {
  const [text,setText] = React.useState('');
  const [list,setList] = React.useState(["aa","bb","cc"]);


  const handleChange = useCallback((e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  },[])

  const handleAdd = useCallback(() => {
    console.log(text)
    setList([...list,text]);
    setText("")
  },[list, text])

  const handleDelete = useCallback((index) => {
    console.log(index)
    var newList = [...list]
    newList.splice(index,1)
    setList(newList)
  },[list])
  return (
    <div>
      <input onChange={(e)=>handleChange(e)} value={text}/>
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
