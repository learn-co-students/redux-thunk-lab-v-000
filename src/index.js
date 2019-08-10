import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { combineReducers } from 'redux'
import catsReducer from './cats_reducer'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const rootReducer = combineReducers({
    cats: catsReducer
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

export default rootReducer