export default (state = [], action) => {
  let index;
  let catPics;

  switch (action.type) {
    case 'LOADING_CATS':
      return console.log("loading cats");

    case 'FETCH_CATS':
      return console.log("fetching cats");

    default:
      return state;
  }
}
