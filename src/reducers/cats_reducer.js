export default function catsReducer(
  state = { pictures: [], loading: false },
  action
) {
  switch (action.type) {
    case "FETCH_CATS":
      return { loading: false, pictures: action.payload };
    default:
      return state;
  }
}
