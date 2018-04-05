import fetch from 'isomorphic-fetch';

export function fetchCats() {
  return function(dispatch) {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(returnJson => {
        return returnJson.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload:
        responseJson.images})
      });
  }
}