// first attempt 5/29/18
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { WrapperApp } from './App';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers/index';
// import thunk from 'redux-thunk';
//
// const store = createStore(rootReducer, applyMiddleware(thunk));
//
// ReactDOM.render(
//   <Provider store={store}>
//     <WrapperApp />
//   </Provider>,
//   document.getElementById('root')
// );

// second attempt 11/18/18
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { WrapperApp } from './App'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render((
  <Provider store={store}>
    <WrapperApp />
  </Provider>),
  document.getElementById('root')
);
