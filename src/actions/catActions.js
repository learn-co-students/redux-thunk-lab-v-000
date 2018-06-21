import fetch from 'isomorphic-fetch';
// export function fetchCats() {
//   const cats = fetch('http://localhost:4000/db').then(response => {
//   return response.json()
// }).then(responseJSON => {
//   return responseJSON.images
// })
//   return {
//     type: 'FETCH_CATS',
//     payload: cats
//   }
// }


export function fetchCats() {
  return function(dispatch) {  
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
    .then(response => {
    return response.json()
    }).then(responseJSON => {
      console.log(responseJSON.images);
    dispatch({type: 'FETCH_CATS', payload: responseJSON.images})
  })
}
}

