import React from "react";
import ReactDom from "react-dom";
import App from './11-styled-components/App';
import {Provider} from "mobx-react";
import store from "./10-mobx/04-router/mobx/store";
ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
