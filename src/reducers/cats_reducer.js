//Define your catsReducer in src/reducers/cats_reducer. Your catsReducer should respond to one action, an action with a type of 'FETCH_CATS'

const catsReducer = (state = {
    loading: false,
    cats: []
},action) => {
    switch (action.type) {
        case 'LOADING_CATS':
            console.log('loading cats right meow')
            return {...state, loading: true}
        case 'FETCH_CATS':
            console.log('cats have meow been loaded')
            return {...state, cats: action.payload};
        default:
            return state;
    }
}

export default catsReducer;