export function catsReducer(state=[], action){
    switch(action.type){
        case 'LOADING_CATS':
            //console.log("Loading message fired");
            return ['Loading...']
        case 'FETCH_CATS':
            //console.log("Finally, We return the new state, an array of cats contained in action.cats.", action.cats);
            return action.cats
        default:
            return state
    }
}