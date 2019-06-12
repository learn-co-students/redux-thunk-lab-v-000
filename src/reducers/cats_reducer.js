<<<<<<< HEAD

export default function catsReducer(state=[], action) {
    switch(action.type){
        case 'LOADING_CATS':
            // console.log("grabbing the cats...");
            return null;
        case 'FETCH_CATS':
            // console.log('successfully grabbed the cats and updated state to: ', action.cats)
            return action.cats
        default:
            return state;
=======
const initialState = {
    loading: false,
    pictures: []
}

export default function (state=initialState, action) {
    switch(action.type) {
        case 'LOADING_CATS':
            console.log('[LOADING_CATS CASE IN REDUCER]: Getting cats from server...')
            return {
                ...state,
                loading: true
            }
        case 'FETCH_CATS':
            console.log('[FETCH_CATS CASE IN REDUCER]: ', action.payload)
            return {
                ...state,
                loading: false,
                pictures: action.payload
            }
        default:
            return state
>>>>>>> labRequirements
    }
}