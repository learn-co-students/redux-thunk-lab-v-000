export function fetchCats() {

  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
    .then(response => {
      return response.json()})
      .then(responseJSON => {
        return responseJSON.images})
        .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats} ));
  }

}
