// write and export your action creator function here
export const fetchCats = () => {
    return (dispatch) => {
        // console.log("Dispatch 'LOADING_CATS'")
        dispatch({ type: 'LOADING_CATS'})

        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(response => response.json())
            .then(responseJSON => {
                // console.log("Dispatch 'ADD_CATS'")
                dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
            })
    }
}