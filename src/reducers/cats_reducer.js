export default function catsReducer(state = {loading: false, cats: []}, action = {}) {
  switch (action.type) {

    case "FETCH_CATS": {
      if (action.pictures) {
        return {
            loading: false,
            // use spread operator to explode the action.pictures array into its component elements
            // instead of nesting array inside the cats array
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
