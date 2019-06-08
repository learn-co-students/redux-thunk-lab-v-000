export function fetchCats() {

  return function (dispatch) {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(res => {
        debugger
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
      })
  }
}
