import React, {Component} from 'react';
import axios from "axios";
import './css/03-非父子.css'

const GlobalContext = React.createContext(); //创建全局context对象


class App extends Component {
  constructor() {
    super();
    this.state = {
      firmList: [],
      info: ''
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
      <GlobalContext.Provider value={{
        info: this.state.info,
        changeInfo: (info) => {
          this.setState({info})
        }

      }}>
        <div>
          {
            this.state.firmList.map(item=><FirmList key={item.filmId} {...item} />)
          }
          <FilmDetail/>
        </div>
      </GlobalContext.Provider>
    );
  }
}

class FirmList extends Component {
  render() {
    let {name,poster,grade,synopsis} = this.props;
    return (
      <GlobalContext.Consumer>
        {
          (value)=>{
            return (
              <div className={'filmItem'} onClick={()=>{
                value.changeInfo(synopsis)
              }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <div>观众评分：{grade}</div>
              </div>
            )
          }
        }
      </GlobalContext.Consumer>
    )
  }
}


class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {
          (value)=>(<div className={'filmDetail'}>
            {value.info}
          </div>)
        }
      </GlobalContext.Consumer>
    )
  }
}

export default App;
