import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

function configureStore(){
  return createStore(
    rootReducer, applyMiddleware(thunk)
  );
}

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
    document.getElementById('root')
);
