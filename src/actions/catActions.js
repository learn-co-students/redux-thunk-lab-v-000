const catPics = [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}]

export function fetchCats() {
return (dispatch) => {
  dispatch({ type: 'LOADING_CATS' });
  return fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(cats => dispatch({ type: 'FETCH_CATS', payload: catPics }));
 };
}
