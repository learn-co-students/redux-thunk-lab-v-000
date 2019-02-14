export default function catsReducer(state={
    loading: false,
    pictures: []
}, action) {
    
    console.log(state.pictures)
    switch(action.type){

        case 'LOADING_CATS':
            console.log('loading')
            return{ ...state, loading: [...state.loading, true] }
    
        case 'FETCH_CATS':
            console.log('got cat pictures')
            console.log(action.payload)
            
            return { loading: false, pictures: action.payload }

        default:
        return state
    }

}