import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { ConnectedApp } from './App'


const initialState = {
  cats: []
};

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

    <Provider store={store} >
    <ConnectedApp />
  </Provider>,

    document.getElementById('root')
);
