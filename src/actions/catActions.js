function fetchCats() {
  return (dispatch) => {
    fetch('http://localhost:4000/db').then(response => {
      return response.json()
    }).then(responseJSON => {
      return responseJSON.images
    }).then(cats => dispatch({type: 'FETCH_CATS', payload: cats}))
  }
}

export default fetchCats;
