export function fetchCats() {
  const cats = fetch('http://www.catapi.com');
  return {
    type: 'FETCH_CATS',
    cats
  };
};
