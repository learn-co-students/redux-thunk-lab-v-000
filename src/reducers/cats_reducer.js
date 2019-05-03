const catsReducer = (state = {
  loading: false,
  pictures: []
}, action) => {

  console.log('Recieved the following action:', action);

  switch (action.type) {

    case "LOADING_CATS":

      return {
        ...state,
        loading: true
      }

    case "FETCH_CATS":
      let cats = action.payload
      console.log(cats)
      return {
        ...state,
        loading: false,
        pictures: cats
      }

    default:
      return state;
  }
}

export default catsReducer
