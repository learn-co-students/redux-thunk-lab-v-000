import React from 'react';
import ReactDOM from 'react-dom';
import { WrapperApp } from './App';
import App from './App'; //seems to be needed by the test for some reason
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
// import store from './configureStore';

const store =  createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
    	<WrapperApp />
    </Provider>,
    document.getElementById('root')
);
