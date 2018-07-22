import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'redux';
import { WrapperApp } from './App'

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;


ReactDOM.render(
   
    <Provider store={store} >,
  
    <WrapperApp />
  
    </Provider>, document.getElementById('root')
    
);
