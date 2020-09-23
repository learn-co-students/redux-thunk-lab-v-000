// write and export your action creator function here
export const fetchCats =() => {
    return (dispatch) => {
        // send a dispatch to indicate we're loading (fetching) the cats:
        dispatch({ type: 'LOADING_CATS' })
        // Then, call fetch(), dispatching the returned data:
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            // call dispatch and send the cat JSON data to the store
            dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
        })
    }
}
