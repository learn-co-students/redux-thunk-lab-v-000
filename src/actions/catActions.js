import fetch from 'isomorphic-fetch';

export const fetchCats = () => {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_CATS_REQUEST'})
    return fetch('http:localhost:4000/db')
    .then(response => response.json())
    .then(respJSON => {
      dispatch({
        type: 'FETCH_CATS',
        cats: respJSON.images
      })
    })
  }
}
