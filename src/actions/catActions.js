import fetch from 'isomorphic-fetch'

export function fetchCats() {
  const url = 'http://localhost:4000/db'

  return function (dispatch) {
    dispatch({type: 'LOADING_CATS'})
    return fetch(url)
      .then(res => res.json())
      .then(resJSON => {
        dispatch({type: 'FETCH_CATS', payload: resJSON.images})
      })
  }
}

