import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { WrapperApp } from './App';
import { browserHistory } from 'react-router'


const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store} >
    <WrapperApp store={store} />
  </Provider>, document.getElementById('root')
)
