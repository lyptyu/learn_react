import React, {Component} from 'react';
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class KSwiper extends Component {
  componentDidUpdate() {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
      },
      loop:this.props.loop
    })
  }


  render() {
    return (
      <div>
        <div className="swiper" style={{height:'200px',background:'yellow'}}>
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

export default KSwiper;
