import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { WrapperApp } from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
