export default function catsReducer(state = {
    loading: false,
    pictures: []
    }, action) {
    switch (action.type) {

        case 'LOADING_CATS':
            return {
                ...state, loading: true
            }


        case 'FETCH_CATS':
            // log the new state for testing:
            const newState = {
                ...state,
                loading: false,
                pictures: action.payload
              }
            console.log(newState)
            
            // The following line also doesn't re-render the CatList component either:
            // return Object.assign({}, state, {pictures: action.payload})

            return {
                ...state,
                loading: false,
                pictures: action.payload
              };


        default:
            return state;
    }
}
