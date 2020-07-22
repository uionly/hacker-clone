import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import thunk from "redux-thunk";

import App from "./components/app";
import reducers from "./reducers";

const middlewares = [thunk];

const composeEnhancer =
  typeof composeWithDevTools !== "undefined" ? composeWithDevTools : compose;

const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
