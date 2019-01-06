function cats_reducer(state = { pictures: [],loading: false} , action){
    switch (action.type) {
        case "LOADING_CATS":
            return { ...state, loading: true}
            
        case "FETCH_CATS":
            return { loading: false, pictures: action.payload }
        default:
            return state;
    }
}

export default cats_reducer