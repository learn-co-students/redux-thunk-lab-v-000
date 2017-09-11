import React from 'react';
import ReactDOM from 'react-dom'
import { create store } from 'redux';
import { Provider } from 'react-redux';
import App from './App'


const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store = {store} >
      <App />
    </Provider>,
    document.getElementById('root')
);
