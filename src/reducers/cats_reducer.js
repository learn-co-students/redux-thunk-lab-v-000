export default function catsReducer(
  state = {
    loading: false,
    pictures: []
  },
  action
) {
  switch (action.type) {
    case "LOADING_CATS": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_CATS": {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        pictures: action.payload
      };
    }

    default:
      return state;
  }
}
