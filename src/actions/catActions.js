// this file will export a function which returns another function. the inner function takes `dispatch` (and `getState`) as arguments.
// this function will dispatch a 'loading' action and then use fetch to get stuff and .then dispatch the actual action with the data. (which will update the store.)

const fetchCats = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/db')
            .then(resp => resp.json())
            .then(json => {
                dispatch(
                    {
                        type: 'FETCH_CATS',
                        payload: json.images
                    }
                )
            });
    }
}

export default fetchCats;