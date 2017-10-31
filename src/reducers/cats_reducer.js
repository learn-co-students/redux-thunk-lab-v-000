export default function catsReducer(state = {cats: {loading: false, cats: []}}, action = {}) {
  switch (action.type) {

    case "FETCH_CATS": {
      if (action.pictures) {
        return {
          cats: {
            loading: false,
            cats: [...state.cats.cats, ...action.pictures]
          }
        }
      } else {
        return state
      }
    }

    case "LOADING_CATS": {
      return {
        cats: {
          loading: true,
          cats: []
        }
      }
    }

    default:
      return state
  }
};
