import React, {Component} from 'react';
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {

    setTimeout(()=>{
      this.setState({
        list: ['aaa','bbb','ccc']
      },()=>{
        new Swiper('.swiper', {
          modules: [Navigation, Pagination],
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    },1000)


  }

  componentDidUpdate(prevProps, prevState) {

  }


  render() {
    return (
      <div>
        <div className="swiper" style={{height:'200px',background:'yellow'}}>
          <div className="swiper-wrapper">
            {
              this.state.list.map(item=>
                <div className="swiper-slide" key={item}>
                  {item}
                </div>
              )
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

export default App;
