import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import App from './App'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Router, Route, browserHistory } from 'react-router'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>, document.getElementById('root')
);
