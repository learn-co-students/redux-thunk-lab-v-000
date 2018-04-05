
export default function catReducer(state = {pictures:[], loading:false}, action) {
  switch (action.type) {

    case 'LOADING_CATS':
      return Object.assign({}, state, {loading:true})

    case 'FETCH_CATS':
      return {pictures: action.payload, loading:false}

    default:
      return state;
  }
};
