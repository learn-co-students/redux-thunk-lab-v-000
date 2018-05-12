function catsReducer(state = { loading: false, pictures: [] }, action) {
  switch (action.type) {
 
    case 'FETCH_CATS':
        // const cats = action.payload
        // return Object.assign({}, state, {pictures: state.pictures.concat(cats)})
        return Object.assign({}, state, {
            loading: false,
            pictures: action.payload
          })
 
    default:
      return state;
  }
};

export default catsReducer