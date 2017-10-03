export default function catsReducer(state = { loading: false, pictures: [] }, action) {
    switch (action.type) {
   
      case 'FETCH_CATS':
        let cats = Object.assign({}, {"loading": false}, {"pictures": action.payload })
        return cats
   
      default:
        return state;
    }
  };

