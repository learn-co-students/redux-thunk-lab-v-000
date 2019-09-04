
export function fetchCats() {
    const cats = fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(responseJSON => responseJSON.images)

    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });
      return cats.then(payload => dispatch({ type: 'FETCH_CATS', payload}));
    };
  }