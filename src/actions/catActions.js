export function fetchCats() {
  // debugger;
  return dispatch => {
    dispatch({ type: "LOADING_CATS" });
    return fetch("http://localhost:4000/db")
      .then(response => {
        return response.json();
      })
      .then(cats => {
        return dispatch({ type: "FETCH_CATS", payload: cats.images });
      });
  };
}
