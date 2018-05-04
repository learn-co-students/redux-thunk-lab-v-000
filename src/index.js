import React from 'react';
import ReactDOM from 'react-dom'
import { WrapperApp } from './App'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk)); 

ReactDOM.render(
    <Provider store={store}>
        <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
