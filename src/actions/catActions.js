// Define your action creator function, fetchCats in src/actions/catActions. This action should use fetch to make the web request for your cat pic JSON. It should use a then function to parse the JSON of the response to this request, and another .then function chained on that to grab the actual collection of cat pic image objects. Something like:

function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return fetch('http://localhost:4000/db')
      .then(response => { return response.json()})
      .then(cats => dispatch({ type:'FETCH_CATS', payload: cats.images
    })
  )}
}

export {fetchCats}

// const cats =
//   fetch('http://localhost:4000/images')
//     .then(response => { return response.json()})
//     .then(responseJSON => {return responseJSON
// })
//
// export default function fetchCats() {
//     return { type:'FETCH_CATS', cats}
// }

// MY VERSION FOR THE FULL FETCH IN ACTION CREATOR
//export default function catActions() {
//   return (dispatch) => {
//     dispatch({type: 'LOADING_CATS'});
//     return fetch('http://localhost:4000/images')
//       .then(response => { return response.json()})
//       .then(cats => dispatch({ type:'FETCH_CATS', cats
//     })
//   )}
// }
// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//     return fetch('http://www.catapi.com')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//   };
// }
// Save the results of this fetch request to a const, cats, and make sure your action creator function returns an object with a type of 'FETCH_CATS' and a payload of the cats collection.
