import fetch from 'isomorphic-fetch';

export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({
          type: 'FETCH_CATS',
          pictures: responseJSON.images
        })
      })
  }
}
// Just for the test, add 'return' before fetch() to make it then-able
// so the test can call then(). The test was written stupidly.
