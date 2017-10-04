export default function cats_reducer (state = { loading: false, pictures: [] }, action) {
  switch(action.type) {
    case 'FETCH_CATS':
      return {loading: false, pictures: state.concat(action.payload)}
    default:
      return state;
  }
}
