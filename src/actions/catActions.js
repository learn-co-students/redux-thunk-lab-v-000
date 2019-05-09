export function fetchCats(){
  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    // make the request
    return fetch('http://localhost:4000/db')
      // parse the json of the response to the request
      .then(res => {
        return res.json()
      // grab the actual collection of image objects
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
      });
  };
};