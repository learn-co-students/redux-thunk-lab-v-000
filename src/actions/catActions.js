
export function fetchCats() {
  // thunk lets us return a function from an action
  return dispatch => {
    // calling dispatch ultimately results in components re-rendering
    dispatch({
      type: "LOADING_CATS"
    });
    const request = fetch("http://localhost:4000/db").then(response =>
      response.json()
    );
    request.then(data => {
      dispatch({
        type: "FETCH_CATS",
        payload: data
      });
    });
  };
}
