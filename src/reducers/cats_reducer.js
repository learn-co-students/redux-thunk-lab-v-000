export default (state = {loading: false, pictures: []}, action) => {
  switch (action.type) {
    case 'FETCH_CATS':
      const newState = {loading: false, pictures: action.payload}
      console.log(newState)
      return newState

    default:
      return state;
  }
};
