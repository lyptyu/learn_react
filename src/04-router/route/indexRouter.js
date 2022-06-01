import React from 'react';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Detail from "../views/Detail";
import Login from "../views/Login";
function isAuth(){
  return !!localStorage.getItem('token');
}
function IndexRouter(props) {
  return (
    <div>
      <HashRouter>
        { props.children }
        <Switch>
          <Route path="/films" component={Films}/>
          <Route path="/cinemas" component={Cinemas}/>
          {/*<Route path="/center" component={Center}/>*/}
          <Route path="/center" render={()=>{
            return isAuth() ? <Center/> : <Redirect to={'/login'}/>
          }}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail/:myid" component={Detail}/>
          <Redirect from="/" to={'/films'} exact={true}/>
          <Route component={NotFound}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default IndexRouter;
