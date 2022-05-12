import React, {Component} from 'react';
import axios from "axios";
import './css/03-非父子.css'
class App extends Component {

  constructor() {
    super();
    this.state = {
      firmList: [],
      info:''
    }
  }
  componentDidMount() {
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
          this.state.firmList.map(item=><FirmList key={item.filmId} {...item} onEvent={(value)=>{
            console.log('父组件接收',value)
            this.setState({
              info:value
            })
          }
          }/>)
        }
        <FilmDetail info={this.state.info}/>
      </div>
    );
  }
}

class FirmList extends Component {
  render() {
    let {name,poster,grade,synopsis} = this.props;
    return (
      <div className={'filmItem'} onClick={()=>{
        this.props.onEvent(synopsis)
      }}>
        <img src={poster} alt={name}/>
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
    )
  }
}


class FilmDetail extends Component {
    render() {
      return (
        <div className={'filmDetail'}>
          {this.props.info}
        </div>
      )
    }
}

export default App;
