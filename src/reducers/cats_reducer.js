export default function catsReducer(state = {loading: false, pictures: []}, action) {

    switch (action.type){
        case 'LOADING_CATS':
            return {...state, loading: true};
        case "FETCH_CATS":
            return {...state, pictures: action.payload, loading: false}
        default:
            return state;
    }
}