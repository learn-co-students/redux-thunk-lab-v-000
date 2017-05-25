import fetch from 'isomorphic-fetch';
export function fetchCats() {
  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:3000/db')
      .then(res => {
        return res.json()
      })
      .then(response => {
        dispatch({
          type: 'FETCH_CATS', payload: response.images
        })
      })
  }
}
