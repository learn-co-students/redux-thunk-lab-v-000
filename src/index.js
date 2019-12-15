import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catReducer from "./reducers/catsReducer";

const store = createStore(catReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
