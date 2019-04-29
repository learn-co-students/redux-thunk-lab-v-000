
export default function catsReducer(state=[], action) {
    switch(action.type){
        case 'LOADING_CATS':
            // console.log("grabbing the cats...");
            return null;
        case 'FETCH_CATS':
            // console.log('successfully grabbed the cats and updated state to: ', action.cats)
            return action.cats
        default:
            return state;
    }
}