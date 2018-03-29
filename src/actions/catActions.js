import fetch from 'isomorphic-fetch'

export function fetchCats() {
  return function(dispatch) {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(res => { return res.json() })
      .then(cats => {dispatch({type: 'FETCH_CATS', payload: cats.images})})
  }
}