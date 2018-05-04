import fetch from 'isomorphic-fetch'

/*
export function fetchCats() {
  return {type: ""};
  let action = {};
  fetch('http://localhost:4000/db').then(response => {
    return response.json()
  }).then(responseJSON => {
    action.type = 'FETCH_CATS';
    action.cats = responseJSON.images;
    return true;
  })
  return action;
}
 */

export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats.images }));
  };
}
/*
*/