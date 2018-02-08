import React from 'react';
import ReactDOM from 'react-dom'
import { WrapperApp } from './App'

const store = configureStore()

ReactDOM.render(
    <WrapperApp store={store}/>,
    document.getElementById('root')
);
