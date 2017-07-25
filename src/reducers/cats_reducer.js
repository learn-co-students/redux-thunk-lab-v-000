const catsReducer = (state = { loading: false, pictures: [] }, action) => {
  switch (action.type) {
    case 'FETCH_CATS':
    console.log(state, "our state")
      return Object.assign({}, state, {pictures: state.pictures.concat(action.payload) })
      default:
        return state
  }
}

export default catsReducer
