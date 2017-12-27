import thunk from 'redux-thunk'

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'ADD_CATS_REQUEST'})
    return fetch('http://localhost:4000/db')
    .then(response =>response.json())
    .then(responseJSON => {
      return responseJSON.images.map(image => (
        image.url
      ))
    })
  }
}
