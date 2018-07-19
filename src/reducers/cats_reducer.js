// cat reducer here to export to the root reducer file. responds to action of fetch cats. state defaults to []
const catsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CATS':
            
            return [
                ...action.payload
            ]
    
        default:
            return state;
    }
}

export default catsReducer;