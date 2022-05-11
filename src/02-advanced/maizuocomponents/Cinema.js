import React, {Component} from 'react';
import axios from 'axios'
class Cinema extends Component {
  state = {}
  constructor() {
    super();
    this.state= {
      cinemaList: [],
      bakcinemaList:[]
    }
    //axios请求数据
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=503408',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.setState({
        cinemaList: res.data.data.cinemas,
        bakcinemaList: res.data.data.cinemas
      })
    })
  }
  render() {
    return (
      <div>
        <input type="text" onInput={this.handleInput}/>
          {
            this.state.cinemaList.map((item, index) => {
              return <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            })
          }
      </div>
    );
  }
  handleInput = (event) => {
    console.log('input',event.target.value)
    var newList = this.state.bakcinemaList.filter((item, index) => {
      return item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase())
    })
    console.log(newList)
    this.setState({
      cinemaList: newList
    })
  }
}

export default Cinema;
