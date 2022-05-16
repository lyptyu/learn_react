import React, { useEffect, useState} from 'react';
import axios from "axios";
import './css/index.css'

const GlobalContext = React.createContext(); //创建全局context对象

function App (){
  const [filmList, setFilmList] = useState([]);
  const [info, setInfo] = useState('');

  useEffect(()=>{
    axios.get(`/test.json`).then(res => {
      console.log(res.data.data.films);
      setFilmList(res.data.data.films);
    })
  },[])

  return (
    <GlobalContext.Provider value={{
      info,
      changeInfo: (info) => {
        setInfo(info);
      }

    }}>
      <div>
        {
          filmList.map(item=><FirmList key={item.filmId} {...item} />)
        }
        <FilmDetail/>
      </div>
    </GlobalContext.Provider>
  );
}

function FirmList(props) {
  let {name,poster,grade,synopsis} = props;
  const value = React.useContext(GlobalContext);
  return (
    <div className={'filmItem'} onClick={()=>{
      value.changeInfo(synopsis)
    }}>
      <img src={poster} alt={name}/>
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  )
}

function FilmDetail(){
  const value = React.useContext(GlobalContext);
  return (
    <div className={'filmDetail'}>
      {value.info}
    </div>
  )
}

export default App;
