function catsReducer(state = { cats: [], requesting: false }, action) {
  switch (action.type) {
 
    case 'START_ADDING_CATS_REQUEST':
      return {
        ...state,
        cats: [...state.cats],
        requesting: true
      }
 
    case 'ADD_CATS':
      return {
        ...state,
        cats: action.cats,
        requesting: false
      }
 
    default:
      return state;
  }
};