import React from 'react'
import { combineReducers } from 'redux';
import { catsReducer } from './cats_reducer'


const rootReducer = combineReducers({
  cats: catsReducer,
  
});





// Define your rootReducer in reducers/index.js to use the combineReducers function with your catsReducer.
