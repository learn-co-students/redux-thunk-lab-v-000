import fetch from 'isomorphic-fetch';

export function fetchCats() {
    const request = fetch('http://localhost:4000/db');
    
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        return request.then(response => {
            return response.json()
        }).then(responseJSON => { 
            dispatch({type: 'FETCH_CATS', payload: responseJSON.images})
       })
    }
}
