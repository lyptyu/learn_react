import React, {Component} from 'react';
import './css/01-index.css'
class App extends Component {
  a = 100
  myRef = React.createRef()
  state = {
    list :[
      {id:1, mytext:'吃饭'},
      {id:2, mytext:'睡觉'},
      {id:3, mytext:'打豆豆'}
    ]
  }
  render() {
    return (
      <div>
        <input ref={this.myRef}/>
        <button onClick={ this.handleClickBtn }>add1</button>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <li key={item.id}>
                {/*{item.mytext}*/}
                {/*富文本展示*/}
                <span dangerouslySetInnerHTML={{__html:item.mytext}}></span>
                <button onClick={()=>this.handleCLickDel(index)}>del</button></li>
            })
          }
        </ul>
        {/*{!this.state.list.length ? <h1>没有数据</h1> : null}*/}
        {/*{ !this.state.list.length && <div>没有数据</div>}*/}
        <div className={ this.state.list.length && 'hidden' }>没有数据</div>
      </div>
    );
  }
  handleClickBtn = ()=>{
    console.log('click1',this.myRef.current.value)
    this.setState({
      list : [...this.state.list,{id:Math.random()*10000000,mytext:this.myRef.current.value}]
    })

    this.myRef.current.value = ''
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
