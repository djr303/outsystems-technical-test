import React from "react";
import ReactDOM from "react-dom";

import UIContainer from './components/App/UIContainer';
import { Provider } from 'react-redux';
import store from './albums'

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UIContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
