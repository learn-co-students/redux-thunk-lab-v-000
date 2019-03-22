import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cats_reducer from './reducers/cats_reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cats_reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
