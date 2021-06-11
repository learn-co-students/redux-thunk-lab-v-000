const catsReducer = ( state = { 
    cats: [], loading: false }, 
    action) => {
        switch(action.type) {
            case 'LOADING_CATS':
                return {
                    ...state,
                    cats: [...state.cats],
                    loading: true
                }
            
            case 'ADD_CATS':
                return {
                    ...state,
                    cats: action.cats,
                    loading: false
                }
                //loading is false, and state.cats is set to action.cats payload
            default:
                return state;
        }
    }
export default catsReducer;

//we set up initial state of loading to false
//so when it's true, we show loading message
