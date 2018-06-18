import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { store } from './store'
import WrapperApp from './App'


ReactDOM.render(
	<Provider store={store}>
    	<WrapperApp />
    </Provider>,
    document.getElementById('root')
);
