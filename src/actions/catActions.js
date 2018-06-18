import fetch from 'isomorphic-fetch';

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return fetch('http://localhost:4000/db')
    .then(rsp => {
      console.log('fetched');
      return rsp.json()
    })
    .then(rspJSON => {
      console.log('rspJSON = ' + rspJSON);
      // debugger;
      return rspJSON.images
    })
    .then(cats => dispatch({type:'FETCH_CATS', payload: cats}))
  }
}
