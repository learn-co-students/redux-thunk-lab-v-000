export function picsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CATS':
      return [
          ...state,
          ...action.payload
        ];
    default:
      return state;
  }
}

export function loadReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return true;
    default:
      return state;
  }
}
