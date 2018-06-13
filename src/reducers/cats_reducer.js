export default function catsReducer(state = { loading: false, pictures: [] }, action) {
  switch (action.type) {
 
    case 'FETCH_CATS':
      return { loading: false, pictures: action.payload }
      // return state;
      // return {...state, pictures: action.payload}
 
    default:
      return state;
  }
};