import React from "react";
import ReactDom from "react-dom";
import App from './06-react-redux/App'
import {Provider} from "react-redux";
import { store,persistor } from "./06-react-redux/redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDom.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root"));
