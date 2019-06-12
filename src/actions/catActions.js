export const fetchCats = () => {
    return dispatch => {
        dispatch({
            type: 'LOADING_CATS'
        })
        return fetch('http://localhost:4000/db')
            .then(response => response.json())
            .then(JSONImgs => {
                console.log('[SERVER_RESP]: ', JSONImgs)
                const cats = JSONImgs.images
                dispatch({type: 'FETCH_CATS', payload: cats})
            })
            .catch(err=>console.log('[FETCH_ERROR]: ', err))
    }
}