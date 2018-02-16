// export const fetchCats = (cats) => {
//   return {
//     type: "FETCH_CATS",
//     cats
//   }
// }
import fetch from 'isomorphic-fetch';

// export const fetchCats = () => {
//   fetch('http://localhost:4000/db').then(response => {
//     return response.json()
//   }).then(responseJSON => {
//     return responseJSON.images;
//   }).then(cats => {
//     console.log(cats)
//     return {
//       type: "FETCH_CATS",
//       cats
//     }
//   })
// }

// import fetch from 'isomorphic-fetch';
export const fetchCats = () => {
  return function(dispatch) {
    return fetch('http://localhost:4000/db').then(response => {
      return response.json()
    }).then(responseJSON => {
      return responseJSON.images;
    }).then(cats => {
      dispatch({
        type: "FETCH_CATS",
        cats
      })
    })
  }
}
// import fetch from 'isomorphic-fetch';
// export function fetchCats() {
//
//   return function(dispatch){
//     dispatch({type: 'LOADING_CATS'})
//     return fetch('http://localhost:4000/db')
//       .then(res => {
//         return res.json()
//       }).then(responseJson => {
//         dispatch({type: 'FETCH_CATS', payload: responseJson.images})
//     })
//     // return cats;
//   }
// }
