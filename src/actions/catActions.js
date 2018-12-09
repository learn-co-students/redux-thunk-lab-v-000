export const fetchCats = () => {
  console.log('in fetch cats')
  return dispatch => {
    // console.log('in dispatch function')
    dispatch({
      type: 'LOADING_CATS'
    });
    return fetch(`http://localhost:4000/db`)
      .then(res => res.json())
      .then(data => {
        console.log('DATA', data)
        dispatch({ type: 'FETCH_CATS', payload: data.images });
      });
  };
};
