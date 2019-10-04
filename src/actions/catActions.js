export const fetchCats = () => {
  return dispatch => {
    dispatch({type: 'LOADING_CATS'})

    return fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
      .then(res => res.json())
      .then(cats => dispatch({type: 'ADD_CATS', cats: cats.images}))
  }
}
