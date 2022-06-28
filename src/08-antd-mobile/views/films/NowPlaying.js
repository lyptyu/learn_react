import React, {useEffect, useRef} from 'react';
import axios from "axios";
import {Image, InfiniteScroll, List} from "antd-mobile";
import {useHistory} from "react-router-dom";

function NowPlaying(props) {
  const history = useHistory()
  const [list, setList] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(true);

  const count = useRef(0)

  useEffect(()=>{
    // axios({
    //   url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=9b9b8b7b7b7b7b7b',
    //   headers:{
    //     'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1575258825984269242498"}',
    //     'X-Host':'mall.film-ticket.film.list'
    //   }
    // }).then(res=>{
    //   setList(res.data.data.films)
    // })
  },[])

  const handleChangePage = (id) => {
   history.push(`/detail/${id}`)
   //  history.push({
   //    pathname: '/detail',
   //    query: {
   //      myid: id
   //    }
   //  })
    // history.push({
    //   pathname:'/detail',
    //   state:{
    //     myid:id
    //   }
    // })
  }
  const loadMore = () => {
    console.log('到底了')
    count.current ++

    setHasMore(false)
    axios({
      url:`https://m.maizuo.com/gateway?cityId=440300&pageNum=${count.current}&pageSize=10&type=2&k=9b9b8b7b7b7b7b7b`,
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1575258825984269242498"}',
        'X-Host':'mall.film-ticket.film.list'
      }
    }).then(res=>{
      setList([...list,...res.data.data.films])
      setHasMore(!!res.data.data.films.length)
    })
  }
    return (
    <div>
      <List>
        {list.map(item => (
          <List.Item
            onClick={()=>{handleChangePage(item.filmId)}}
            key={item.filmId}
            prefix={
            <Image
              src={item.poster}
              width={80}
            />
          }
            description={
            <div>
              <div>{item.grade && '观众评分：' + item.grade}</div>
              <div>类型：{item.category}</div>
              <div>{item.nation}|{item.runtime}分钟</div>
            </div>
          }
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
}

export default NowPlaying;
