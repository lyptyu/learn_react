


// import React, {Component} from 'react';

// class Tabbar extends Component {
//   state = {
//     // list: [
//     //   {
//     //     id: 1,
//     //     text: '电影'
//     //   },
//     //   {
//     //     id: 2,
//     //     text: '影院'
//     //   },
//     //   {
//     //     id: 3,
//     //     text: '我的'
//     //   },
//     // ],
//     // current: 0
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {
//             this.props.list.map((item,index) =>
//               <li onClick={()=>this.handleClick(index)} className={ this.props.current === index ? 'active' : undefined } key={item.id}>{item.text}</li>
//             )
//           }
//         </ul>
//       </div>
//     );
//   }
//   handleClick = (index) => {
//     console.log(index)
//     // this.setState({
//     //   current: index
//     // })
//     this.props.myevent(index)
//   }
// }

const Tabbar = (props) => {
  const handleClick = (index) => {
    console.log(index)
    // this.setState({
    //   current: index
    // })
    props.myevent(index)
  }
  return (
    <div>
      <ul>
        {
          props.list.map((item,index) =>
            <li onClick={()=>handleClick(index)} className={ props.current === index ? 'active' : undefined } key={item.id}>{item.text}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Tabbar;
