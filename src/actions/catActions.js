// *** STEP 3:  SET UP THE ACTION CREATOR ***

// 1. Now, define your action creator function, fetchCats().
// 2. Remember, Thunk alters the behavior of action creator functions, allowing us to return a function 
//      that takes in dispatch. Inside this function, we can execute asynchronous code, 
//      and, once resolved, we can use dispatch to update our store with the remote data.
// 3. The fetchCats() action creator should use fetch() to make the web request for your cat pic JSON. 
// 4. It should use a .then() function to parse the JSON of the response to this request, 
//      and another .then() function chained on that to grab the actual collection of cat pic image objects. 
// 5. Remember, we built the catsReducer to look for two action types: 
//      1) 'LOADING_CATS', should be dispatched before to the fetch() request is called. 
//      2) 'ADD_CATS', should be dispatched along with a payload of the cats JSON collection. 

// Creating the function:
// 1. The first thing we want to do in this function is send a dispatch to indicate we're loading 
// (fetching) the cats.
// 2. Then, we call fetch(), dispatching the returned data.
// 3. In this case, we just need the data inside images, so we can pass that directly when 
// calling the second dispatch.

export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
  }
}