const cats =
  fetch('http://localhost:4000/images')
    .then(response => { return response.json()})
    .then(responseJSON => {return responseJSON}
  )

export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('http://www.catapi.com')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'ADD_CATS', cats }));
  };
}

export default function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return { type:'FETCH_CATS', cats}
  }
}

MY VERSION FOR THE FULL FETCH IN ACTION CREATOR
export default function catActions() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return fetch('http://localhost:4000/images')
      .then(response => { return response.json()})
      .then(cats => dispatch({ type:'FETCH_CATS', cats
    })
  )}
}
