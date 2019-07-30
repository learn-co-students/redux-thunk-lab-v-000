export function fetchCats() {
  const cats = fetch('http://localhost:4000/db')
    .then(res => res.json())
    .then(cats => ({type: 'FETCH_CATS', payload: cats.images}) )
}
