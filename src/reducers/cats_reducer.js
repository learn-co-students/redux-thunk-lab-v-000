const catsReducer = (state = {loading: false, pictures: []}, action) => {
    switch (action.type) {
        case 'FETCH_CATS': 
            // state = state.pictures.concat(action.payload)               
            return {loading: false, pictures: action.payload}
        default:
            return state;
    }
};

export default catsReducer;