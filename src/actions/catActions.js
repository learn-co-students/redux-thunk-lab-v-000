import fetch from 'isomorphic-fetch';

export function fetchCats() {

  return function(dispatch) {
    dispatch({type: "LOADING_CATS"})
    return fetch('http://localhost:4000/db').then(response => {
      return response.json()
    }).then(cat => {
      dispatch({type: 'FETCH_CATS', payload: cat.images} )
    })
  }
}



//Save the results of this fetch request to a const, 
//cats, and make sure your action creator function returns an object with a type of 'FETCH_CATS' and a payload of the cats collection.