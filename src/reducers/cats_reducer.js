export default function catsReducer(state = {
    loading: false,
    pictures: [],
  }, action) {
    switch (action.type) {

      case "LOADING_CATS":
        return {...state, loading: true};

      case "FETCH_CATS":
        return {loading: false, pictures: [ ...action.payload ]};

      default:
        return state;
    }
  }

// Define your catsReducer in src/reducers/cats_reducer. Your catsReducer should respond to two actions
// with types of 'LOADING_CATS' and a 'FETCH_CATS' respectively.
