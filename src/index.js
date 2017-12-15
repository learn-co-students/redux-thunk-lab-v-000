import React from 'react';
import ReactDOM from 'react-dom'
import { WrapperApp } from './App'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import  rootReducer  from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


ReactDOM.render(
  <Provider store={store}>
    <WrapperApp store={store} />
  </Provider>,
    document.getElementById('root')
);
