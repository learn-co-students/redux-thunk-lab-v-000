import fetch from 'isomorphic-fetch';

export function fetchCats(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'});
    return fetch(`http://localhost:4000/db`)
      .then(respone => respone.json())
      .then(jsonResponse => dispatch({type: `FETCH_CATS`, payload: jsonResponse.images}));
  };
}

export default fetchCats
