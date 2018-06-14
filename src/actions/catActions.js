// import fetch from 'isomorphic-fetch';
//
// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS' });
//     return fetch('https://localhost:4000/db')
//       .then(resp => resp.json())
//       .then(respJSON => respJSON.images)
//     /* returns an array of cat image objects:
//     [
//       {
//         "url": "http://25.media.tumblr.com/tumblr_lyufg8UKQ51qgg1s9o1_500.jpg",
//         "id": "ajs",
//         "source_url": "http://thecatapi.com/?id=ajs"
//       },
//     */
//       .then(catsArray => dispatch({ type: 'FETCH_CATS', payload: cats.images}));
//   };
// }


import fetch from 'isomorphic-fetch';
export function fetchCats() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
    })
    // return cats;
  }
}
