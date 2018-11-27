
const initialState = {
  loading: false,
  pictures: []
}

export default function catsReducer(state = initialState, action){

  switch(action.type){

    // If this is not used why define it in action?
    // case 'LOADING_CATS':
    //   return {...state, loading: true}

    case 'FETCH_CATS':
       console.log("NEW STATE :",{...state, pictures: action.payload})
       console.log("Payuload :", action.payload)
       // console.log("State pictures:", {...state, pictures: [...state.pictures, action.payload]})
      return {...state, pictures: [...action.payload], loading: false}
      // return {...state, pictures: state.pictures.concat(action.payload)}

    default:
      return state

  }
}
