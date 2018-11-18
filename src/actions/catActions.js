// first attempt 5/29/18
// import fetch from 'isomorphic-fetch';
//
// export function fetchCats() {
//   return function(dispatch) {
//     dispatch({type: 'LOADING_CATS'})
//     return fetch('http://localhost:4000/db')
//       .then(response => {
//         return response.json()
//       }).then(responseJSON => {
//         return responseJSON.images
//       }).then(cats => dispatch({type: 'FETCH_CATS', payload: cats}))
//   }
// }

// second attempt 11/18/18
import fetch from 'isomorphic-fetch';

export function fetchCats(){
  return function(dispatch) {
    dispatch({type: 'LOADING_CATS'});
    return fetch('http://localhost:4000/db')
      .then(response => { return response.json() })
      .then(responseJSON => dispatch({type: 'FETCH_CATS', payload: responseJSON.images}))
  }
}
