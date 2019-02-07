export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(responseJSON => {
        console.log("inside fetchCats")
        console.log(responseJSON.images)
        dispatch({ type: 'FETCH_CATS', payload: responseJSON.images }) });
  };
}
