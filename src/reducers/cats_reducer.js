function catsReducer(state = [], action) {
  switch (action.type) {
 
    case 'FETCH_CATS':
      return action.cats
 
    default:
      return state;
  }
};

export default catsReducer