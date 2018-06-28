export default function catsReducer(state = { loading: false, pictures: [] }, action) {
  switch (action.type) {
    case 'FETCH_CATS':
      return action.catPics;
    default:
      return state;
  }
}
