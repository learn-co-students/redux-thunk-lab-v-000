import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function store(initialState) {
    const store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
      )
    );
    return store;
}

ReactDOM.render(
    <Provider store={store()} >
        <App />
    </Provider>,
    document.getElementById('root')
);
