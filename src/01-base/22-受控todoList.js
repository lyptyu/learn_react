import React, {Component} from 'react';
import './css/01-index.css'
class App extends Component {
  a = 100
  myRef = React.createRef()
  state = {
    list :[
      {id:1, mytext:'吃饭',isCheck:false},
      {id:2, mytext:'睡觉',isCheck:false},
      {id:3, mytext:'打豆豆',isCheck:false}
    ],
    mytext:''
  }
  render() {
    return (
      <div>
        <input value={this.state.mytext} onChange={(event)=>{
          this.setState({
            mytext:event.target.value
          })
        }}/>
        <button onClick={ this.handleClickBtn }>add1</button>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <li key={item.id}>
                {/*{item.mytext}*/}
                <input type="checkbox" checked={item.isCheck} onChange={()=>{
                  this.handleChecked(index)
                }}/>
                {/*富文本展示*/}
                <span dangerouslySetInnerHTML={{__html:item.mytext}} style={{textDecoration:item.isCheck ? 'line-through': ''}}></span>
                <button onClick={()=>this.handleCLickDel(index)}>del</button>
              </li>
            })
          }
        </ul>
        {/*{!this.state.list.length ? <h1>没有数据</h1> : null}*/}
        {/*{ !this.state.list.length && <div>没有数据</div>}*/}
        <div className={ this.state.list.length && 'hidden' }>没有数据</div>
      </div>
    );
  }
  handleChecked = (index) => {
    console.log(index)
    let newList = [...this.state.list]
    newList[index].isCheck = !newList[index].isCheck
    this.setState({
      list:newList
    })
  }
  handleClickBtn = ()=>{
    this.setState({
      list : [...this.state.list,{id:Math.random()*10000000,mytext:this.state.mytext,isCheck:false}],
      mytext:''
    })
  }
  handleCLickDel = (index)=>{
    let newList = this.state.list.slice()
    newList.splice(index,1)
    this.setState({
      list : newList
    })
  }
}

export default App;
