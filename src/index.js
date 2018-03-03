import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {Provider} from 'react-redux';
// import { WrapperApp } from './App'

const store = createStore(rootReducer,applyMiddleware(thunk))
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// )

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
    document.getElementById('root')
);
