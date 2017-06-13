import fetch from 'isomorphic-fetch';

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return fetch('http://localhost:3000/db')
    .then(response => response.json())
    .then(cats => dispatch({type: 'FETCH_CATS', payload: cats.images}))
  }
}

// const cats = fetch('http://localhost:3000/db').then(response => {
//     return response.json()
//   }).then(responseJSON => {
//     return responseJSON.images
//   })
// return {type: 'FETCH_CATS', cats}
