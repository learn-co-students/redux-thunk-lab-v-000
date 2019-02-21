export function fetchCats() {
  console.log("fetchCats fires");
  return dispatch => {
    dispatch({ type: "LOADING_CATS" });
    return fetch("http://localhost:4000/db")
      .then(response => {
        return response.json();
      })
      .then(cats => dispatch({ type: "FETCH_CATS", payload: cats.images }))
      .catch(err => console.error("Error", err));
  };
}
