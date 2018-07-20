export function fetchCats(){
  return (dispatch) => {
  dispatch({ type: "START_ADDING_PICS"})
  fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(json => dispatch({ type: "FETCH_CATS", payload: json.images}))
  }
}
