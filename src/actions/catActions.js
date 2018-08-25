export function fetchCats() {
  return(dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return fetch('http://learn-redux-confizzed13.c9users.io:4000/images')
    .then(response => response.json())
    .then(cats => {
      console.log('fetch cats = ', cats)
      debugger;
      dispatch({ type: 'FETCH_CATS', payload: cats.images })
    });
  };
}
