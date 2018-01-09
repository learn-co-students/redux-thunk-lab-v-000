import React from 'react';
import ReactDOM from 'react-dom'
import { WrapperApp } from './App'
// import { store } from './store'
import { Provider } from 'react-redux'
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import rootReducer from './reducers/index';
import { catsReducer } from "./reducers/cats_reducer";
import thunk from "redux-thunk";

// export function configureStore() {
//   return createStore(
//     catsReducer,
//     applyMiddleware(thunk)
//     //how to import the dev tools here?
//   );
// }

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)


ReactDOM.render(
    <Provider store={store}>
        <WrapperApp catPics={[]} />
    </Provider>,
    document.getElementById('root')
);
