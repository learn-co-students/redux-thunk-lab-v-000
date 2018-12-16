import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Add redux and store to App
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// Add middleware "THUNK"
import thunk from 'redux-thunk';

//Update and change so we can use combined reducers
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
