import axios from "axios";
// thunk
// function getCinemaAction() {
//
//   return (dispatch)=>{
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=503408',
//       method: 'get',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
//         'X-Host': 'mall.film-ticket.cinema.list'
//       }
//     }).then(res => {
//       dispatch({
//         type:'change-list',
//         payload:res.data.data.cinemas
//       })
//     })
//   }
// }
//promise
async function getCinemaAction() {
  const res = await axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=503408',
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  })
  return {
    type: 'change-list',
    payload: res.data.data.cinemas
  }
}

export default getCinemaAction;
