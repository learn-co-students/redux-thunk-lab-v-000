export default function catsReducer(state = {
    loading: false,
    pictures: []
    }, action) {
    switch (action.type) {

        case 'LOADING_CATS':
            return state


        case 'FETCH_CATS':
            console.log(action.payload)

            let newState = {state, pictures: action.payload}
            console.log(newState)

            return {state, pictures: action.payload}


        default:
            return state;
    }
}
