export default function manageCats(state = {
  cats: [],
}, action) {
  switch (action.type) {

    case 'LOADING_CATS':
      return 'woohoo';

    case 'FETCH_CATS':
      return action.cats;

    default:
      return state;
  }
}
