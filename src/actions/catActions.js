export function fetchCats() {
  return function(dispatch) {
    dispatch({
      type: 'LOADING_CATS'
    })
    return fetch('http://localhost:4000/db').then(resp => resp.json())
      .then(catsJson => dispatch({
        type: 'FETCH_CATS',
        pictures: catsJson.images
      }))
  }
}
