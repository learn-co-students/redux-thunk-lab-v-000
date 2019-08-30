import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import cats_reducer from './reducers/cats_reducer'

//use Redux's createStore function to initialize your store
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cats_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
