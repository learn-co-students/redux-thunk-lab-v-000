export const fetchCats = () => {
  return (dispatch) => {
    console.log('dispatching 1st action')
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(data => {
      console.log('heres the data:', data.images)
      const cats = data.images
      console.log('dispatching 2nd action')
      dispatch({ type: 'FETCH_CATS', payload: cats })
    });
  };
}
