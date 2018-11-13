import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import cats_reducer from './cats_reducer'

let store = createStore(cats_reducer)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
