export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    const cats = fetch('https://3e41b65120d84c1fbe31c95bbdc84585.vfs.cloud9.us-east-2.amazonaws.com/')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats.images }));
  };
}