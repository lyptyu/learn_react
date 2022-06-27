import React, {useEffect} from 'react';

function NotFound(props) {
  useEffect(() => {
    console.log(props)
  },[props])
  return (
    <div>404</div>
  );
}

function kerwinconnect(cb,obj){
  var value =cb()
  console.log(value)
  return MyComponent => {
    return (props)=><MyComponent {...value} {...props} {...obj}/>
  }
}

export default kerwinconnect(()=>{
  return {
    a:1,
    b:2
  }
},{
  aa(){},
  bb(){}
})(NotFound);
