import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App'
<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
=======
import thunk from 'redux-thunk';
import { 
    createStore, 
    compose, 
    applyMiddleware
} from 'redux';
import rootReducer from './reducers/index';

// For enhancers passed to createStore method
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create redux store

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
>>>>>>> labRequirements

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);