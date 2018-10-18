export const fetchCats = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CATS" });
    return fetch('http://localhost:4000/db')
      .then(resp => resp.json())
      .then(cats => dispatch({type: "FETCH_CATS", payload: cats.images}))
  }
}

// Our action creator function will be making a request to http://localhost:4000/db to
// receive these cat images.

// Define your action creator function, fetchCats in src/actions/catActions. This action should use
// fetch to make the web request for your cat pic JSON. It should use a then function to parse the
// JSON of the response to this request, and another .then function chained on that to grab the
// actual collection of cat pic image objects.

// make sure your action creator function returns an object with a type of 'FETCH_CATS' and a payload
// of the cats collection.
