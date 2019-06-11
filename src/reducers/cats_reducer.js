export default(state = { loading: false, pictures: [] }, action) => {
  switch (action.type) {
    case 'FETCH_CATS':
      return {...state, loading: false, pictures: action.payload}

    case 'LOADING_CATS':
      return {...state, loading: true}

    default:
      return state;
  }
};
