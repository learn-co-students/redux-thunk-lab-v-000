import React from 'react';
import ReactDOM from 'react-dom'
import {WrapperApp} from './App'
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {compose} from 'redux'
import rootReducer from './reducers'

const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),

    )
)

ReactDOM.render(
  <Provider store={store}> 
    <WrapperApp/>
  </Provider>,
    document.getElementById('root')
);
