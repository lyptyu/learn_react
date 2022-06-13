import React from "react";
import ReactDom from "react-dom";
import App from './06-react-redux/App'
import {Provider} from "react-redux";
import store from "./05-redux/redux/store";

ReactDom.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root"));
