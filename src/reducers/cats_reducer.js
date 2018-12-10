export default function catsReducer(state= {loading: false, pictures: []}, action) {
  switch (action.type){
    case 'LOADING_CATS':
      const loading = {
        loading: true
      }

    case 'FETCH_CATS':
      const cats = {
        pictures: [...state.pictures, ...action.pictures]
      }
    return {...state, cats}

    default:
      return state;

  }
};
