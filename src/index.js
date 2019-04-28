import React from 'react';
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import {Wrapper} from './App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store} >
    <Wrapper />
  </Provider>,
  document.getElementById('root')
);
