export default (state = { loading: false, pictures: [] }, action) => {
   switch (action.type) {
     case 'FETCH_CATS':
       return {loading: false, pictures: action.payload};
    case 'LOADING_CATS':
      return {loading: true, pictures: []}
    default:
       return state;
  }
};
