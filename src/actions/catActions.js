export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://www.catapi.com')

      .then(response => response.json())
      .then(cats => dispatch({ type: 'FETCH_CATS', cats }));
  };
}