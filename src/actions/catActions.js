export function fetchCats(){
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(cats => dispatch({ type: 'ADD_CATS', cats }));
  }
}
//   fetch('http://localhost:4000/db').then(response => {
//   return response.json()
// }).then(responseJSON => {
//   return responseJSON.images
// })
// }
//
//
// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//     return fetch('http://www.catapi.com')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//   };
// }
