import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import catsReducer from "./features/cats/catsSlice";

const store = createStore(catsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
