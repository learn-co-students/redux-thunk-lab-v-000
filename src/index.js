import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import manageCats from './reducers/cats_reducer'
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(manageCats, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)