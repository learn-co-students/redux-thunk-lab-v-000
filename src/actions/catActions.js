export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' });
        return fetch('http://localhost:4000/db')
            .then(response => response.json())
            .then(data => dispatch({ type: 'FETCH_CATS', payload: data.images }))
    }
}

// Save the results of this fetch request to a const, cats, and make sure your action creator function returns an object with a type of 'FETCH_CATS' and a payload of the cats collection.

// fetch('http://localhost:4000/db')
// .then(response => response.json())
// .then(responseJSON => responseJSON.images)