export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'ADD_CATS', cats }));
  };
}