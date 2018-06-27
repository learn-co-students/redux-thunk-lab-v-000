export function fetchCats() {
  const cats = fetch('http://localhost:4000/db')
  .then(response => { response.json() })
  .then(responseJSON => { return responseJSON.images });
  return {
    type: 'FETCH_CATS',
    cats: cats
  };
}
