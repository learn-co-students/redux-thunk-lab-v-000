export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' })
    console.log("loading_cats")

    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      // .then(responseJSON => console.log(responseJSON))
      // .then(responseJSON => dispatch({ type: 'FETCH_CATS', payload: responseJSON.images }))
      .then(responseJSON => { return responseJSON.images })
      .then(data => dispatch({ type: 'FETCH_CATS', payload: data }))
  }
}
