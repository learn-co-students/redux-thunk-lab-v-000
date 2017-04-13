import React from 'react';
import ReactDOM from 'react-dom';
import WrapperApp from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
      <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);
