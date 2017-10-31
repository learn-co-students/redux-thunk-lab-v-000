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
// The app works fine in the browser without 'return',
// but the function will return nil or undefined, which fails the test b/c
// the test is trying to inspect the JSON in the then() promise.

// A promise, or future, is a request that may or may not resolve successfully in the future.
// It is an object that will exist in the future but may or may not successfully resolve in the future

// Thunk lets you run multiple dispatches.
