//Define your catsReducer in src/reducers/cats_reducer. Your catsReducer should respond to one action, an action with a type of 'FETCH_CATS'

const catsReducer = (state = {
    loading: false,
    pictures: []
},action) => {
    switch (action.type) {
        case 'LOADING_CATS':
            
            return Object.assign({}, state, {loading:true})
        case 'FETCH_CATS':
            
            return {loading:false , pictures: action.payload};
        default:
            return state;
    }
}

export default catsReducer;