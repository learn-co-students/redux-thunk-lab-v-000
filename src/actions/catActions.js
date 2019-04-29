export function fetchCats() {
  const cats = fetch('http://www.catapi.com')
  .then(response => response.json())
  .then(data => {
    return data.images
  });
  return {
    type: 'FETCH_CATS',
    payload: cats
  };
};
