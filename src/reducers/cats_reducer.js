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
          // cost cats = fetch('http://localhost:4000/db').then(response => {
          //               return response.json()
          //             }).then(responseJSON => {
          //               return responseJSON.images
          //             })

        default:
          return state;

      }
    }
