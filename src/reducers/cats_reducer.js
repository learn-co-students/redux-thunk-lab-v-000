export default function catsReducer(
  state={
    loading: false,
    pictures: []
  },
  action)
    {
      switch(action.type){
        case 'LOADING_CATS':
          return 'loading...'

        case 'FETCH_CATS':
          return 'fetching...'
        default:
          return state;

      }
    }
