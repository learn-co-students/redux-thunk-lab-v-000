export default (state = {loading: false, pictures: []}, action) => {
  switch (action.type) {
    case "FETCH_CATS":
    console.log(action.payload)
      return { loading: false, pictures: action.payload }
    case "LOADING_CATS":
      return {loading: true, ...state.pictures}
    default:
      return state;
  }
};
