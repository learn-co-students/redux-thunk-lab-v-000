import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import CatsReducer from './reducers/cats_reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

let store = createStore(CatsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

dispatch({type: '@@INIT'})
