import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer'
import { WrapperApp } from './App'

const store = createStore(catsReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store} >
      <WrapperApp />,
    </Provider>, document.getElementById('root')
);
