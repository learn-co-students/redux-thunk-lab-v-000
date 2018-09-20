import fetch from 'isomorphic-fetch';

export function fetchCats() {
  return( 
    dispatch => {
      dispatch({ type: 'LOADING_CATS' });
      return fetch('http://localhost:4000/db')
      .then(response => {return response.json()})    
      .then(cats => cats);
  });
};

// 

// {return dispatch({ type: 'FETCH_CATS', payload: cats })}