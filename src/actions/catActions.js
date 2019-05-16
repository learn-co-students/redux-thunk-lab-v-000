const loadingCats = {
    type: 'LOADING_CATS',
}

export const fetchCats = () => {
    return dispatch => {
        //console.log("The fetchCats action generator fires and dispatches LOADING_CATS.");
        dispatch( loadingCats );
        // fetch the images from the db
        setTimeout(()=> {
            return fetch('http://localhost:4000/db')
            // return the jsonified response
            .then(response =>  response.json())
            // return the actual images
            .then(responseJSON => responseJSON.images)
            // return the action object 
            .then(cats => {
                //console.log("After fetching, we dispatch the FETCH_CATS action: ", cats);
                return dispatch( { type: 'FETCH_CATS', cats} );
            })
        }, 3000);
}
}