import React from "react";
import ReactDom from "react-dom";
import App from './07-antd/09-Modal'
import 'antd/dist/antd.min.css';
// import {Provider} from "react-redux";
// import { store,persistor } from "./06-react-redux/redux/store";
// import {PersistGate} from "redux-persist/integration/react";

ReactDom.render(
  // <React.StrictMode>
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <App/>
  //   </PersistGate>
  // </Provider>,
  // </React.StrictMode>,
  <App/>,
  document.getElementById("root"));
