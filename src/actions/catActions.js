require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export function fetchCats() {
  
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });
      
    const cats = fetch('http://localhost:4000/db').then(response => {
      return response.json()
    }).then(responseJSON => {
      return responseJSON.images
    });
    return {
      type: 'FETCH_CATS',
      payload: cats
    };
  }
}