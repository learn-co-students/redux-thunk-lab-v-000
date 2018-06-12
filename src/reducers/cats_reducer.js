export default function catsReducer(state = {loading: false, pictures: []}, action){
  switch (action.type){
    case 'FETCH_CATS':
      const catPics = (action.payload)
      const loading = !!catPics ? false : null
      return  {loading: loading, pictures: catPics}
    default:
      return state
  }
}
 