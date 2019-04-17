import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger' // https://www.npmjs.com/package/redux-logger
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'

const store = createStore(
	rootReducer, 
	applyMiddleware(thunk, createLogger())
)

ReactDOM.render(
	<Provider store={store}>
    	<App />
	</Provider>,
    document.getElementById('root')
)
