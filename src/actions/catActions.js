import fetch from 'isomorphic-fetch';
export function fetchCats() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    console.log("dispatching LOADING_CATS action")
    return fetch('http://localhost:4000/db')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        console.log("dispatching FETCH_CATS action")
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
    })
  }
}
