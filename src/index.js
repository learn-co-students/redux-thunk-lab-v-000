import React from 'react';
import {Provider} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />,
    </Provider>, document.getElementById('root')
);
