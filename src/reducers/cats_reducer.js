const CatsReducer = (state = { loading: false, pictures: [] }, action) => {
  switch (action.type) {

    case 'LOADING_CATS':
      return state

    case 'FETCH_CATS':
      return state.cats = {loading: false, pictures: action.payload}


    default:
      return state;
  }
};
export default CatsReducer;
