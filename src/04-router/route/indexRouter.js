import React from 'react';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
function IndexRouter(props) {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/films" component={Films}/>
          <Route path="/cinemas" component={Cinemas}/>
          <Route path="/center" component={Center}/>
          <Redirect from="/" to={'/films'} exact={true}/>
          <Route component={NotFound}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default IndexRouter;
