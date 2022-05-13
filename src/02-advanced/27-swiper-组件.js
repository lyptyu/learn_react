import React, {Component} from 'react';
import KSwiper from "./swiper/Swiper";
import KSwiperItem from "./swiper/SwiperItem";
import axios from "axios";
class App extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&k=6725410",
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16521512971098665519218689","bc":"110100"}',
        'X-Host':'mall.cfg.film-float.banner'
      }
    }).then(res=>{
      console.log(res.data.data)
      this.setState({
        list: [res.data.data,res.data.data]
      })
    })
  }


  render() {
    return (
      <div>
        <KSwiper loop={false}>
          {
            this.state.list.map((item,index)=>(
                <KSwiperItem key={index}>
                  <img src={item.imgUrl} alt={item.name} style={{width:'100%'}}/>
                </KSwiperItem>
            ))
          }
        </KSwiper>
      </div>
    );
  }
}

export default App;
