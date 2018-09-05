import React from 'react';

export default function cats_reducer(state = {
  loading: false,
  pictures: [],
}, action) {

  switch(action.type) {
    case 'FETCH_CATS':
      return {loading: false, pictures: action.payload}
    case 'LOADING_CATS':
      return Object.assign({}, state, {loading: true})
    default:
      return state;

  }
};

