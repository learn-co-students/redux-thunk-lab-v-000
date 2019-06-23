export default (state= {loading: false, pictures: []}, action) => {
  switch ( action.type ) {
    case 'LOAD_CATS':
      return {...state, loading: true }
    case 'FETCH_CATS':
      return { loading: false, pictures: action.payload }
    default:
    return state;
  }
}