import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'redux';
import { App, WrapperApp } from './App'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
    <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
