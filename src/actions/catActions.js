export function fetchCats() {
    return function(dispatch) {
        dispatch({ type: "LOADING_CATS" });
        return fetch('http://localhost:4000/db')
            .then(response => response.json())
                .then(json => {
                    dispatch({ type: "FETCH_CATS", payload: json.images })
                });
    };
}
