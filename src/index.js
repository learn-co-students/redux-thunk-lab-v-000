import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App';
import { WrapperApp } from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp catPics={[]}/>
  </Provider>,
    document.getElementById('root')
);
