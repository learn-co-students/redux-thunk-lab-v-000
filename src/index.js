import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

// state = {}

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
