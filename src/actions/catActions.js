// import fetch from 'isomorphic-fetch';

// export function fetchCats(){
//     return function(dispatch){
//         dispatch({ type: 'LOADING_CATS'})
//         return fetch('http://localhose:3000/db')
//             .then(response => {return response.json()})
//             .then(responseJSON => {dispatch({type: 'FETCH_CATS', payload: responseJSON.images})
//         })
//     }
// }

import fetch from 'isomorphic-fetch';
export function fetchCats() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:3000/db')
      .then(res => {return res.json()})
      .then(responseJson => {dispatch({type: 'FETCH_CATS', payload: responseJson.images})
    })
  }
}