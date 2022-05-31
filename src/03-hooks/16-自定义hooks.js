import React, { useEffect, useMemo } from 'react'
import axios from 'axios'

const useCinemaLise = () => {
  const [cinemaList, setCinemaList] = React.useState([])


  useEffect(()=>{
    //axios请求数据
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=503408',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      setCinemaList(res.data.data.cinemas)
    })
  },[])
  return {
    cinemaList
  }
}

const useFilter = (cinemaList,mytext) => {
  const getCinemaList = useMemo(() => {
    return cinemaList.filter((item, index) => {
      return item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())
    })
  }, [mytext, cinemaList])
  return {
    getCinemaList
  }
}

function Cinema (){
  const [mytext, setText] = React.useState('')
  const {cinemaList} = useCinemaLise()
  const {getCinemaList} = useFilter(cinemaList,mytext)

  return (
    <div>
      <input type="text" value={mytext} onChange={(event)=>{
        setText(event.target.value)
      }}/>
      {
        getCinemaList.map((item, index) => {
          return <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        })
      }
    </div>
  );
}

export default Cinema;
