import fetch from 'isomorphic-fetch';

function fetchCatsSuccess(cats){
  return { type: 'FETCH_CATS', payload: cats };
}

export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(json => json.images)
      .then(cats => dispatch(fetchCatsSuccess(cats)))
  };
};
