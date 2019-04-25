export const fetchCats = () => (dispatch) => {
  dispatch({type: "LOADING_CATS"})
  return fetch('http://localhost:4000/db')
  .then(resp => resp.json())
  .then(data => {
    return dispatch({type: 'FETCH_CATS', payload: data.images})
  })
}