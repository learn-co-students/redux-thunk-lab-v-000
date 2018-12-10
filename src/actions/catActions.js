export function fetchCats() {
  const cats = fetch('http://www.catapi.com').then(response => response.json())
  return {
    type: 'FETCH_CATS',
    cats
  };
}