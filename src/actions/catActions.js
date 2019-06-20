export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' })
    return fetch('http://localhost:4000/db')
      .then(res => res.json())
      .then(data => {
        console.log('[SERVER_RESP]: ', data)
        const cats = data.images
        dispatch({ type: 'FETCH_CATS', payload: cats })
      })
      .catch(err => console.log('[FETCH_ERROR]: ', err))
  }
} 