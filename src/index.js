import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'redux';
import { createStore, applyMiddleware } from 'redux';
import {connectedApp as App} from './App';
import thunk from 'redux-thunk';
//import {rootReducer} from './reducers'

//console.log(typeof rootReducer); // => undefined??
import { combineReducers } from 'redux'
import catsReducer from './reducers/cats_reducer'

const rootReducer = combineReducers({
    cats: catsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
