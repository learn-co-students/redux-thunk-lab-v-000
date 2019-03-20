export function fetchCats() {
  const cats = fetch('http://localhost:4000/db').then(response => {
    return response.json()
  }).then(responseJSON => {
    return responseJSON.images
  })
  console.log(cats)
  return {
    type: 'FETCH_CATS',
    cats
  };
};
