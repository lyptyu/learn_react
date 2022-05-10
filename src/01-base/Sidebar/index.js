import React from 'react';

function SideBar(props) {
  console.log(props)
  let {bg,position} = props;
  var obj1 = {
    left:0
  }
  var obj2 = {
    right:0
  }

  var obj = {
    background:bg,
    width:'200px',
    position:'fixed',
  }
  var styleObj = position==='left'?{...obj,...obj1}:{...obj,...obj2};
  return (
    <div style={
      styleObj
    }>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
      </ul>
    </div>
  );
}

export default SideBar;
