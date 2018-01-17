export default (state = {loading: false, pictures: []}, action) => {
    switch (action.type) {
        case 'LOADING_CATS':
            return {...state, loading: true}
        //fetching cats from external API, 
        // what this reducer returns will become the 
        // state
        case 'FETCH_CATS':
            return {loading: false, pictures: action.payload}
    
        default:
            return state;
    }
}
