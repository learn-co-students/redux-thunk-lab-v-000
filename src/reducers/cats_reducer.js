export default (state = { loading: false, pictures: [] }, action) => {
  switch(action.type) {
    case 'FETCH_CATS':
    return state

      // return state.concat(action.payload)
      // return {...state, pictures: state.pictures.concat(action.payload)}
      // return state.concat(...state.pictures, action.payload)
    default:
      return state;
  }
}
