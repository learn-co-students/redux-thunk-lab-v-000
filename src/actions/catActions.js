/*
fetch('http://localhost:3000/db').then(response => {
  return response.json()
}).then(responseJSON => {
  return responseJSON.images
})
*/

export default function fetchCats(){
    return (dispatch) => {
        return fetch('http://localhost:3000/db').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: "FETCH_CATS", payload: responseJSON.images })
        });
    }
}