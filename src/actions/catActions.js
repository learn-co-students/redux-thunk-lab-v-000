export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CATS_REQUEST' })
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(responseJSON => responseJSON.images)
      .then(cats => dispatch({type: 'FETCH_CATS', cats}))
  };
}
