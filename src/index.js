import React from 'react';
import ReactDOM from 'react-dom'
import {WrapperApp} from './App'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
