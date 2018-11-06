export default function catReducer(state={pictures: [], loading: false}, action) {
    
    switch(action.type) {
        case("'LOADING_CATS'"):
            return { ...state, loading: true }
        case("FETCH_CATS"):
            return  { ...state, pictures: action.pictures, loading: false }
        default:
            return {...state}
    }
}