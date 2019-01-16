export function catsReducer(state = { loading: false, pictures: [] }, action) {
debugger;
  switch (action.type) {
    case 'LOADING_CATS':
      console.log('loading cats')
      return {loading: true, pictures: []}

    case 'FETCH_CATS':
      console.log('fetching cats')
      return {loading: false, pictures: action.payload.images}

    default: return state;
  }
}
export default catsReducer
