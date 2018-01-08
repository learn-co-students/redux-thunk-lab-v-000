import {applyMiddleware } from "redux";
import { createStore } from "redux";
// import rootReducer from './reducers/index';
import {catsReducer} from './reducers/cats_reducer'
import thunk from "redux-thunk";

export function configureStore(){
  let test = createStore(
    catsReducer,
    applyMiddleware(thunk)
    //how to import the dev tools here?
  )

  return test
}

export const store = configureStore()
