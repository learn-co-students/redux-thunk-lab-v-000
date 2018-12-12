import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store} >
    	<App />
    </Provider>,
    document.getElementById('root')
);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import manageTodo from './reducers/manageTodo';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// let store = createStore(manageTodo);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );