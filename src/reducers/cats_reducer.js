export default function catsReducer(state = {
    loading: false,
    pictures: []
}, action) {
    switch(action.type){
        case 'LOADING_CATS':
            console.log('we are loading your cats');
            return {loading: true, ...state};
        case 'FETCH_CATS':
            return {loading: false, pictures: action.payload};
        default:
            return state;
    }
}