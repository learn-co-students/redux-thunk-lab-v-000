export default function catsReducer ( state = {loading: false, pictures: [] }, action ) {
  switch (action.type) {

    case 'LOADING_CATS':
      return state = { loading: true, pictures: [] }

    case 'FETCH_CATS':
      action.payload.map(cat => {
        return state = {
          ...state,
          pictures: [...state.pictures, cat.url]
        }
      })


    default:
      return state
  }
}