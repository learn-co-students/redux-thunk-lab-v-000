require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export default function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats.images }));
  };
  
    // return (dispatch) => {
    //   dispatch({ type: 'LOADING_CATS' })
    // };
      
  //   const cats = fetch('http://localhost:4000/db').then(response => {
  //     return response.json()
  //   }).then(responseJSON => {
  //     return responseJSON.images
  //   });

  //   return (dispatch) => {
  //     dispatch ({
  //       type: 'FETCH_CATS',
  //       payload: cats
  //   });
  // }
}