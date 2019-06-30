
export const fetchCats = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_CATS' });

    return fetch('http://localhost:4000/db')
        .then(response => response.json())
        .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats.images }));
    };
  }

// alternate pattern(syntax)
// export const fetchCats = () => {
//   return dispatch => {
//     dispatch({ type: 'LOADING_CATS' });
//
//     return fetch('http://localhost:4000/db')
//         .then(response => response.json())
//         .then(data => {
//            // console.log("cat Action 1 cat (data.images[0]):", data.images[0])
//           const cats = data.images
//           dispatch({ type: 'FETCH_CATS', payload: cats });
//     });
//   }
// }
