export default function catsReducer(state = {
    loading: false,
    pictures: []
  }, action) {
    switch (action.type) {
      case 'LOADING_CATS':
        console.log('loading cats', state, action)
        return { ...state, loading: true }
  
      case 'FETCH_CATS':
      console.log('fetching cats', state, action)
      console.log({ 
        ...state, 
        pictures: action.payload, 
        loading: false 
      } )
        return { 
          ...state, 
          pictures: action.payload, 
          loading: false 
        } 
      default:
        return state
    }
  }