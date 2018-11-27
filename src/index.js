import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

// Acess to reducers
// import catsReducer from './reducers/cats_reducer';

// Add redux and store to App
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Add middleware "THUNK"
import thunk from 'redux-thunk';

// UPDATE AND CHANGE SO WE CAN USE COMBINE REDUCERS
import rootReducer from "./reducers/index.js";


const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// const store = createStore(catsReducer);
const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store} >
      <App  />
    </Provider>,rootElement);
