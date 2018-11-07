function catsReducer(state = {
  loading: false,
  pictures: [{
    id: 1,
    url: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
  }]
}, action) {
  console.log(action);

  switch(action.type) {
    case 'LOADING_CATS':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_CATS':
      return {
        loading: false,
        pictures: action.payload
      };

    default:
      return state;
  }
}

export default catsReducer;
