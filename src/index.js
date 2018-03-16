import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {WrapperApp} from './App';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store} >
        <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
