export default function manageCats (state = {loading: false, urls: []}, action) {
  switch(action.type) {
    case 'LOADING_CATS':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_CATS':
      console.log('cats: ', action.cats)
      return {
        urls: action.urls,
        loading: false
      }
    default:
      return state
  }
}
