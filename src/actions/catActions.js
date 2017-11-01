
export function fetchCats(){
  return (dispatch)=>{
    return fetch('http://127.0.0.1:4000/db').then(res => res.json())
      .then(res => {return dispatch({type: 'FETCH_CATS', payload: res.images})});
  }
}
