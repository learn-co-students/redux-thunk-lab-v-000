
export default function catsreducer(state= {loading: false, pictures: []}, action) {
  switch ( action.type) { //the switch will compare the incoming action and determine what to return
    case 'LOADING_CATS': //action loading cats
      return Object.assign({}, state, {loading: true}) //changes the state from loading false to loading true.
    case 'FETCH_CATS':
      return {loading: false, pictures: action.payload}
    default://the default action if nothing is passed in to compare
      return state;
  }
}
