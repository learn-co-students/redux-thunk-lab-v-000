import 'isomorphic-fetch'

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'})
    fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(data => {
        const cats = data.images.map(cat => cat.url)
        dispatch({ type: 'FETCH_CATS', cats })});
  };
}
