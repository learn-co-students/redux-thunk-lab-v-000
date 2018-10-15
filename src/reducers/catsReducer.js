export default function catsReducer(state = [], action){
    switch(action.type){
        case 'LOADING_CATS':
            console.log("LOADING_CATS called")
            return state

        case 'FETCH_CATS':
            console.log("FETCH_CATS called")
            console.log(action)
            return [...action.payload]

        default:
            return state
    }
}