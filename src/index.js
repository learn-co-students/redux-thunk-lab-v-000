import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
// import { browserHistory } from 'react-router';
import thunk from 'redux-thunk'
import { WrapperApp } from './App'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />,
    </Provider>,
    document.getElementById('root')
);
