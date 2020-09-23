// add the catsReducer
const catsReducer = (state = { cats: [], loading: false }, action) => {
    switch(action.type) {
        // state.loading becomes true, while the rest of state is just copied to a new object
      case 'LOADING_CATS':
        return {
          ...state,
          cats: [...state.cats],
          loading: true
        }
        // state.loading becomes false, and state.cats is set to the action.cats payload (HINT: so we know we're expecting a payload object with a cats key).
      case 'ADD_CATS':
        return {
          ...state,
          cats: action.cats,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default catsReducer;