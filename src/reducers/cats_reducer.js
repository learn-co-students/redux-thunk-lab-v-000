export default function cats_reducer(state = {loading: false, pictures: []}, action) {

    switch (action.type) {
      case 'LOADING_CATS':
        return {loading: true, pictures: []}


        case 'FETCH_CATS':

        const cats2= {
          loading:false,
          pictures: action.payload,
                  }
        return cats2



      default:
        return state;
    }
}
