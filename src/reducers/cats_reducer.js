
export default function catsReducer(state = 
    { loading: false, pictures: [] }, action) {
    // console.log('action : ', action)
    
    switch (action.type) {
    
        case 'LOADING_CATS':
            // console.log('Loading Cats')
            return { ...state, loading: true }

        
        case 'FETCH_CATS':
            // console.log('Fetch Cats')
            return {
                loading: false,
                pictures: action.payload
            }
        
        default:
          return state;
    }

}