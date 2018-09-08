/**
export function fetchCats() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
    //return fetch('http://localhost:4000/db')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
        //dispatch({type: 'FETCH_CATS', payload: response.data.images})
    })

  }
}
**/



export function fetchCats() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_CATS' });
   return fetch('http://localhost:4000/db')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_CATS', payload: response.images }));
 };// end return

}//end fetchCats
