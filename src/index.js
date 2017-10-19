import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { WrapperApp } from './App'


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
