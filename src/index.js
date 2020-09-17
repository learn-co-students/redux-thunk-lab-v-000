// *** STEP 1: Implement Thunk ***

// 1. To implement Thunk, import applyMiddleware from redux and thunk from redux-thunk 
// (package already included in package.json). 
// 2. Pass thunk into applyMiddleware(), and pass that in as the second argument for createStore.
// 3. Import createStore from redux.
// 4. Import a reducer. Import from src/reducers/catsReducer.js. 
// 5. Pass this reducer into createStore, assigning the return value to store. 
// 6. Wrap the App component in Provider and pass store to it.

// Summary: We have the setup for connecting Redux to the React app, 
// and we've configured Thunk. Now, we need to build out the reducer.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer.js';

const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);