import React from 'react';
import ReactDOM from 'react-dom'
import {App, WrapperApp} from '../src/App'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

let store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() , applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store} >
    <WrapperApp />
  </Provider>,
    document.getElementById('root')
);
