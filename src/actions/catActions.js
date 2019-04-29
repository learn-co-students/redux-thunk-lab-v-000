export function fetchCats() {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'});
        
        return fetch('http://localhost:4000/db')
          .then(response => {
            return response.json()
          })
          .then(responseJSON => {
            return responseJSON.images
          })
          .then(cats => {
            // console.log('resolved promise cats data:', cats)
            dispatch({
            type: "FETCH_CATS", 
            cats
            })
          })
    }
}