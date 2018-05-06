import fetch from 'isomorphic-fetch';

export function fetchCats() {
    return function(dispatch) {
        dispatch({type: 'LOADING_CATS'})
        return fetch('http://localhost:4000/db')
            .then(response => { return response.json()
            }).then( resJson => {
                dispatch({type: 'FETCH_CATS', payload: resJson.images})
            })
    }
}