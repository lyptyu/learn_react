import React, {useEffect} from 'react';
import axios from "axios";
import { withRouter} from "react-router-dom";

function NowPlaying(props) {
  // const history = useHistory()
  const [list, setList] = React.useState([]);
  useEffect(()=>{
    axios({
      url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=9b9b8b7b7b7b7b7b',
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1575258825984269242498"}',
        'X-Host':'mall.film-ticket.film.list'
      }
    }).then(res=>{
      setList(res.data.data.films)
    })
  },[])

  // const handleChangePage = (id) => {
  //   history.push(`/detail/${id}`)
  //   // history.push({
  //   //   pathname: '/detail',
  //   //   query: {
  //   //     myid: id
  //   //   }
  //   // })
  //   // history.push({
  //   //   pathname:'/detail',
  //   //   state:{
  //   //     myid:id
  //   //   }
  //   // })
  // }
    return (
    <div>
      <ul>
        {
          list.map(item=>{
            return <WithFilmItem key={item.filmId} {...item}/>
          })
        }
      </ul>
    </div>
  );
}

export default NowPlaying;

function FilmItem (props) {
  const {name, filmId} = props
  return <li  onClick={() => props.history.push(`/detail/${filmId}`)}>{name}</li>
}

const WithFilmItem = withRouter(FilmItem)
