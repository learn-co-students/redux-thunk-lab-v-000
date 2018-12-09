import { stat } from "fs";

export default (state = { loading: false, pictures: [] }, action) => {
  let idx;
  let quote;

  switch (action.type) {
    case 'LOADING_CATS':
      return { ...state, loading: true}
    case 'FETCH_CATS':
      return { ...state, loading: false, pictures: action.payload };
    default:
      return state;
  }
}
