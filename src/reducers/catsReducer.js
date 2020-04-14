const initialState = {
  cats: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_CATS": {
      return { ...state, loading: true };
    }
    case "ADD_CATS":
      return { ...state, loading: false, cats: action.cats };
    default:
      return state;
  }
};
