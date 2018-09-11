function catsReducer(state = {loading: false, pictures: []}, action) {
    switch(action.type) {
       case 'FETCH_CATS':
        return {loading: false, pictures: action.payload};
       case 'LOADING_CATS':
        return state;
       default:
        return state;
    }
  }
   export default catsReducer;