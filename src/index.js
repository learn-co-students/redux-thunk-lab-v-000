import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import App from './App';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
