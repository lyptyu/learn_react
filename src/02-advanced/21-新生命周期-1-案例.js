import React, {Component} from 'react';
import axios from "axios";
class App extends Component {
  state={
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={()=>{
            this.setState({
              type:1
            })
          }}
          >正在热映</li>
          <li onClick={()=>{
            this.setState({
              type:2
            })
          }}>即将上映</li>
        </ul>

        <FilmList type={this.state.type}/>
      </div>
    );
  }
}

class FilmList extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    if (this.props.type === 1){
      axios({
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3290259',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        this.setState({
          list:res.data.data.films
        })
      })
    } else {
      axios({
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9417020',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }}).then(res=>{
        this.setState({
          list:res.data.data.films
        })
      })
    }
  }


  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.type === 1){
  //     axios({
  //       url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3290259',
  //       headers:{
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }
  //     }).then(res=>{
  //       this.setState({
  //         list:res.data.data.films
  //       })
  //     })
  //   } else {
  //     axios({
  //       url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9417020',
  //       headers:{
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }}).then(res=>{
  //       this.setState({
  //         list:res.data.data.films
  //       });
  //     })
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {  //代替componentWillReceiveProps和componentWillMount
    console.log(nextProps.type)
    return {
      type:nextProps.type
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type === prevState.type) return;
    if (this.state.type === 1){
      axios({
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3290259',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        this.setState({
          list:res.data.data.films
        })
      })
    } else {
      axios({
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9417020',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }}).then(res=>{
        this.setState({
          list:res.data.data.films
        });
      })
    }
  }


  render (){
    return (
      <ul>
        {
          this.state.list.map(item=>
            <li key={item.filmId}>{item.name}</li>
          )
        }
      </ul>
    )
  }

}

export default App;
