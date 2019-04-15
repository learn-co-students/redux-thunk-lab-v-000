export function fetchCats() {
  const url = 'http://localhost:4000/db'
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'})
    return fetch(url)
      .then(response => response.json())
      .then(cats => {
        const catPics = cats.images
        dispatch({ type: 'FETCH_CATS', payload: catPics })
      }
    )
  }
}