export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    const cats = fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'FETCH_CATS', cats }));
  };
}
