import React from 'react';
import ReactDOM from 'react-dom'
import {combineReducers, createStore, applyMiddleware} from "redux";
import WrapperApp from './App'
import {Provider} from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/cats_reducer';


const rootReducer = combineReducers({
    catsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <WrapperApp />
    </Provider>, document.getElementById('root')
);
