import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {WrapperApp} from './App'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
