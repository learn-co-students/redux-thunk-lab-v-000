export function catsReducer(state=  [], action){
  console.log(" i am in cats reducer")
  switch (action.type){
    case 'FETCH_CATS':
        console.log(action.payload)
        return action.payload;
    case 'LOADING_CATS':
        console.log(action.payload)
    default:
        return state;
  }
}
