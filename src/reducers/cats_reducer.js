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
    }
}