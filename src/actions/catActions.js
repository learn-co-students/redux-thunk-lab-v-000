// export function fetchCats() {
//   const url = 'http://localhost:4000/db'
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS'})
//     return fetch(url)
//       .then(response => response.json())
//       .then(cats => {
//         const catPics = cats.images
//         dispatch({ type: 'FETCH_CATS', payload: catPics })
//       }
//     )
//   }
// }

export function fetchCats() {
  return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });

      return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(things => things.images)
      .then(cats => dispatch({type: 'FETCH_CATS', payload: cats}))
    }
}