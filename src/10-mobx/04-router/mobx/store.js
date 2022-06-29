import {observable, configure, action, runInAction} from "mobx";
import axios from "axios";
configure({
  enforceActions: 'always'
})
// const store = observable({
//   isTabbarShow:true,
//   list:[],
//   cityName:'北京',
//   changeShow(){
//     this.isTabbarShow = true
//   },
//   changeHide(){
//     this.isTabbarShow = false
//   }
// }, {
//   changeShow: action,
//   changeHide: action
// })

class Store {
  @observable isTabbarShow = true
  @observable list = []
  @observable cityName = '北京'
  @action changeShow(){
    this.isTabbarShow = true
  }
  @action changeHide(){
    this.isTabbarShow = false
  }
  @action async getList(){
    const list = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=503408',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>res.data.data.cinemas)
    runInAction(()=>{
      this.list = list
    })
  }

}

const store = new Store()

export default store
