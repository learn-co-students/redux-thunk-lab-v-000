
export default function catsReducer(state=[], action) {
    switch(action.type){
        case 'LOADING_CATS':
            console.log("grabbing the cats...");
        case 'FETCH_CATS':
            console.log(action.cats)
            return action.cats
        default:
            return state;
    }
}