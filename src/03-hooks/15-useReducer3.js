import React, { useEffect, useState} from 'react';
import axios from "axios";
import './css/index.css'

const GlobalContext = React.createContext(); //创建全局context对象

const initialState = {
  info: '',
  filmList: [],
}

const Reducer = (prevState,action)=>{
  const newState = {...prevState};
  switch(action.type){
    case 'setFilmList':
      newState.filmList = action.payload;
      return newState;
    case 'setInfo':
      newState.info = action.payload;
      return newState;
    default:
      return prevState;
  }
}

function App (){
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  useEffect(()=>{
    axios.get(`/test.json`).then(res => {
      console.log(res.data.data.films);
      dispatch({
        type: 'setFilmList',
        payload: res.data.data.films
      })
    })
  },[])

  return (
    <GlobalContext.Provider value={{
      state,dispatch
    }}>
      <div>
        {
          state.filmList.map(item=><FirmList key={item.filmId} {...item} />)
        }
        <FilmDetail/>
      </div>
    </GlobalContext.Provider>
  );
}

function FirmList(props) {
  let {name,poster,grade,synopsis} = props;
  const {dispatch} = React.useContext(GlobalContext);
  return (
    <div className={'filmItem'} onClick={()=>{
      // value.changeInfo(synopsis)
      dispatch({
        type:'setInfo',
        payload: synopsis
      })
    }}>
      <img src={poster} alt={name}/>
      <h4>{name}</h4>
      <div>观众评分：{grade}</div>
    </div>
  )
}

function FilmDetail(){
  const {state} = React.useContext(GlobalContext);
  return (
    <div className={'filmDetail'}>
      {state.info}
    </div>
  )
}

export default App;
