
// NON-ASYNC ACTION CREATORS

const fetchCatsSuccess = (catPictures) => {
  return { type: 'FETCH_CATS', payload: catPictures };
}

const loadingCats = () => {
  return { type: 'LOADING_CATS' };
}




// ASYNCHRONOUS ACTION CREATORS

export const fetchCats = () => {
  return dispatch => {
    dispatch(loadingCats())
    return fetch("http://localhost:4000/db")
      .then( response => response.json())
      .then( cats => (dispatch(fetchCatsSuccess(cats.images))))
  }
}
