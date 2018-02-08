import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(
  rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExension ? window.devToolsExension() : f => f
  )
)


ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
    document.getElementById('root')
);
