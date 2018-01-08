import fetch from 'isomorphic-fetch';

export const fetchCats = () => {
  return function(dispatch) {
    dispatch({
      type: 'LOADING_CATS'
    });
    return fetch('http://localhost:4000/db')
      .then(blob => blob.json())
      .then(res => dispatch({ type: 'FETCH_CATS', payload: res.images }));
  };
};
