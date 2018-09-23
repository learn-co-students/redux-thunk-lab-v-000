export default function catReducer(state =  { 
    loading: false, 
    pictures: [] 
    }, action) {
    switch (action.type) {
        case 'LOADING_CATS':
            return {...state, loading: true}
        case 'FETCH_CATS':
            console.log({...state, pictures: action.payload, loading: false});
            return {...state, pictures: action.payload, loading: false}
        default:
           return state
    }
}