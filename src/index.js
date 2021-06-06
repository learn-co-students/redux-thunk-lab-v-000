import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import catsReducer from 'src/reducers/catsReducer.js'

const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
