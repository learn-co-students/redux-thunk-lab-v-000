const loadingCats = () => {
  return {
    type: "LOADING_CATS"
  }
}

export const fetchCats = () => {
  return dispatch => {
    dispatch(loadingCats());
    return fetch('http://localhost:4000/db')
      .then(resp => resp.json())
      .then(cats => dispatch({ type: "FETCH_CATS", payload: cats.images }))
  }
}