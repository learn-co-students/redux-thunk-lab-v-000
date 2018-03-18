export default function manageCats(state = { loading: false,
  pictures: []
}, action) {
  switch (action.type) {

    case 'FETCH_CATS':
      console.log("HEREHEHRHE")
      console.log(action)
      return Object.assign({}, state, {
        pictures: action.payload,
        loading: false
      });
    case 'LOADING_CATS':
      return Object.assign({}, state, { loading: true })

    default:
      return state;

  }
};
