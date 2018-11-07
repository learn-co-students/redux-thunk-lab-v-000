export function fetchCats() {
  console.log('level 1')
  return (dispatch) => {
    console.log('level 2')
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then( resp => resp.json())
      .then( cats => dispatch({ type: "FETCH_CATS", payload: cats.images }))

  };
}