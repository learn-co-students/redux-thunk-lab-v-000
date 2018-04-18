export function fetchCats() {
  const cats = fetch('http://localhost:4000/db')
    .then(resp => resp.json())
    .then(resp => resp.images)
  
  return {
    type: 'FETCH_CATS',
    cats
  }
}