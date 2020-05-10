const catsReducer = (state = { cats: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_CATS':
          console.log('loading cats', action)
          return {
              ...state, 
              cats: [ ...state.cats ],
              loading: true
            }
        case 'ADD_CATS':
            console.log('add cats', action)
            return {
                ...state, 
                cats: action.cats, 
                loading: false
            }
        default:
            return state
    }
}

export default catsReducer;