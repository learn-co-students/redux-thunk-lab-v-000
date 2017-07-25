const fetchCats = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/db')
           .then(response => {
            return response.json()})
          .then(cats => {
            return dispatch({type: "FETCH_CATS", payload: cats.images})})
            .then((action) => action.payload)
  }
}

export default fetchCats
