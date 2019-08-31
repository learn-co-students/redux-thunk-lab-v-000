export default function catsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOADING_CATS':
            return {    
                ...state, loading: true
            }
  
        case 'FETCH_CATS':
            return {
                pictures: action.payload,
                loading: false
            }

        default:
            return state;
    }
};
