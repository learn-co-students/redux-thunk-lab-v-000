

export default function fetchCats() {
    
    return (dispatch) => {
        // debugger;
        dispatch({type: "LOADING_CATS"})
        
        return fetch('http://10.0.0.99:4000/db')
        .then(response => response.json())
        .then(responseJSON => dispatch({type: "FETCH_CATS", payload: responseJSON.images}))

        
        // fetch('http://localhost:4000/db').then(response => {
        // return response.json()
        // }).then(responseJSON => {
        // console.log(responseJSON)
        // })
    }
}