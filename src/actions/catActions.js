// write and export your action creator function here

const url = "https://learn-co-curriculum.github.io/cat-api/cats.json"

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CATS"})
    fetch(url)
    .then(res => res.json())
    .then(json => {
        dispatch({ type: "ADD_CATS", cats: json.images })
    })
    }
}



//the fetchCats action creator uses fetch() to make a request for cat pic json
//then parses the json of the response
//another then chains on to grab the actual collection of cat pic image objects

//in reducers, we have catReducer looking for two action types
//'LOADING_CATS' should be dispatched before the fetch

//'ADD_CATS' should be dispatched with a payload of the cats JSON collection

