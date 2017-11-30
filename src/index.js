import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk';
import {Provider} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { WrapperApp } from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <WrapperApp />
    </Provider>, document.getElementById('root'),
    document.getElementById('root')
);
