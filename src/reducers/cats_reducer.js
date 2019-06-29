// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function catsReducer(state = {
  loading: false,
  pictures: []
}, action) {

  switch (action.type) {

    case 'LOADING_CATS':
    return {...state, loading:true}

    case 'FETCH_CATS':
    // debugger
    return { ...state, pictures: action.payload, loading: false }

  default:
    return state;
  };
}
