import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, createStore, applyMiddleware} from 'redux'
import App from './App'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
