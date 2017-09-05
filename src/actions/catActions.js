import fetch from 'isomorphic-fetch'

export function fetchCats() {

  return function(dispatch) {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:3000/db')
      .then(res => res.json())
      .then(cats => dispatch({type: 'FETCH_CATS', payload: cats.images}))
  }
}
