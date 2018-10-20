export function loadingCats() {
    return {
        type: 'LOADING_CATS'
    };
}

export function fetchCats() {
    return (dispatch) => {
        dispatch(loadingCats());
        return fetch('http://localhost:4000/db')
            .then(response => response.json())
            .then(catPics => dispatch({type:"FETCH_CATS", payload:catPics.images}));
         
    };
}
