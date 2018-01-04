import fetch from "isomorphic-fetch";

export default function fetchCats() {
  // debugger
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(responseJSON => {

      debugger

      const cats = responseJSON.images;
      return (
        dispatch({ type: 'FETCH_CATS', payload: cats })
      )
    })
  }
}
