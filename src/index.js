import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk))
console.log('store initiated: ', store)
ReactDOM.render(
	<Provider store={store}>
    	<App />
	</Provider>,
    document.getElementById('root')
);
