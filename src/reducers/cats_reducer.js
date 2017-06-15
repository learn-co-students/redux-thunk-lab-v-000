//Define your catsReducer in src/reducers/cats_reducer. Your catsReducer should respond to one action, an action with a type of 'FETCH_CATS'

const catsReducer = (state = [],action) => {
    switch (action.type) {
        case 'FETCH_CATS':
            return state;
        default:
            return state;
    }
}
console.log(typeof catsReducer); // => undefined??

export default catsReducer;