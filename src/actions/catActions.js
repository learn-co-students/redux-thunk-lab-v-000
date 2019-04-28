// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS' });
//     return fetch('http://www.catapi.com')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'FETCH_CATS', cats }));
//   };
// }


export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' });
        return fetch('http://localhost:4000/db')
            .then(response => response.json())
            .then(data => dispatch({ type: 'FETCH_CATS', payload: data.images }))
    }
}
