export function fetchCats(){
  return (dispatch) => {
    dispatch({type:'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(res => {return res.json()})
      .then(resJSON => {dispatch({type:'FETCH_CATS', payload: resJSON.images})
    })
  }
}
