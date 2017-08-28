import fetch from 'isomorphic-fetch';
export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:3000/db')
      .then(response => response.json())
      .then(cats => {
        return dispatch({ type: 'FETCH_CATS', payload: cats.images })
      });
    };
  }
