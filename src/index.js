import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import rootStore from './reducers/index'

const store = createStore(rootStore, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
