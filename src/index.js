import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {WrapperApp} from './App'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // Can I delete the second half of this line?
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)


ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
    document.getElementById('root')
);
