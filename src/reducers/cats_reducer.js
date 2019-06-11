export default function catsReducer(state = [], action) {
    switch (action.type) {
        case "LOADING_CATS":
            return [...state, action.cats]
        case "FETCH_CATS":
            return [...state, action.cats]

        default:
            return state
    }
}