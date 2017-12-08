
const initialState = {
  loading: false, 
  pictures: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATS':
      return {
        ...state,
        loading: false,
        pictures: action.payload
      }
    default:
      return state;
  }
};


