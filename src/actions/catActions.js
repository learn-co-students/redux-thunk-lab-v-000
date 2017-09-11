import fetch from 'isomorphic-fetch';

// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'LOAD' });
//     return fetch('http://localhost:4000/db')
//       .then(response => {
//         return response.json()
//       })
//       .then(responseJSON => {
//         return responseJSON.images
//       }
//   };
// }

export function fetchCats() {
  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
    })
  }
}