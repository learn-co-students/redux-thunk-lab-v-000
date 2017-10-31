export default function catsReducer(state = {loading: false, cats: []}, action = {}) {
  switch (action.type) {

    case "FETCH_CATS": {
      if (action.pictures) {
        return {
            loading: false,
            cats: [...state.cats, ...action.pictures]
          }
      } else {
        return state
      }
    }

    case "LOADING_CATS": {
      return {
          loading: true,
          cats: []
      }
    }

    default:
      return state
  }
};
