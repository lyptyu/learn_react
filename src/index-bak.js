import React from "react";
import ReactDom from "react-dom";
import App from './08-antd-mobile/App'
// import 'antd/dist/antd.min.css'; //pc
import {Provider} from "react-redux";
import { store,persistor } from "./08-antd-mobile/redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDom.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  // <App/>,
  document.getElementById("root"));
