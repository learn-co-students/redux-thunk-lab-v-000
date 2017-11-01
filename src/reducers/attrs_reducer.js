export default function attrsReducer(state = [], action) {
  switch (action.type) {

    case "FETCH_CATS":
      return state.concat(action.cats)

    // case "REMOVE_CAT":
    //   const idx = state.indexOf(action.id);
    //   return [ ...state.slice(0, idx), ...state.slice(idx + 1) ];

    default:
      return state
  }
};
