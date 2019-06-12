export default (state=null, action) => {
    switch(action.type) {
        case 'LOADING_CATS':
            console.log('[LOADING_CATS CASE IN REDUCER]: Getting cats from server...')
            return null
        case 'FETCH_CATS':
            console.log('[FETCH_CATS CASE IN REDUCER]: ', action.cats)
            return action.cats
        default:
            return state
    }
}