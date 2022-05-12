import React, {Component} from 'react';
import axios from "axios";
import './css/03-非父子.css'

var bus = {
  list:[],
  subscribe(callback){
    console.log(callback)
    this.list.push(callback)
  },
  publish(text){
    this.list.forEach(callback=>{
      callback && callback(text)
    })
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      firmList: [],
    }
    axios.get(`/test.json`).then(res => {
      console.log(res.data.data.films);
      this.setState({
        firmList: res.data.data.films
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.firmList.map(item=><FirmList key={item.filmId} {...item} />)
        }
        <FilmDetail/>
      </div>
    );
  }
}

class FirmList extends Component {
  render() {
    let {name,poster,grade,synopsis} = this.props;
    return (
      <div className={'filmItem'} onClick={()=>{
        bus.publish(synopsis)
      }}>
        <img src={poster} alt={name}/>
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
    )
  }
}


class FilmDetail extends Component {
  constructor() {
    super();
    this.state = {
      info: ''
    }
    bus.subscribe((info)=>{
      console.log('filmDetail定义',info)
      this.setState({
        info
      })
    })
  }
  render() {
    return (
      <div className={'filmDetail'}>
        {this.state.info}
      </div>
    )
  }
}

export default App;
