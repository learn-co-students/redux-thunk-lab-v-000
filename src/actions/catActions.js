// import { loadingCats } from '../actions'


export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });

    const cats = fetch('http://localhost:4000/db')

      .then(response => response.json())
      .then(payload => payload.images)
      .then(payload => dispatch({ type: 'FETCH_CATS', payload }));

    return cats

  };
}



// export function fetchCats() {
//   return async dispatch => {
//     dispatch({ type: 'LOADING_CATS' });
//     const response = await fetch('http://localhost:4000/db');
//     const cats = await response.json();
//     return dispatch({ type: 'FETCH_CATS', cats });
//   }
// return fetch('http://localhost:4000/db')
    //   .then(response => response.json())
    //   .then(cats => dispatch({ type: 'FETCH_CATS', cats }));

//     fetch('http://localhost:4000/db').then(response => response.json()
// }).then(responseJSON => responseJSON.images
// })