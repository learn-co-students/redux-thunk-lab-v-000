export function fetchCats() {
  const cats = fetch('http://localhost:3000/db')
    .then(res => {
      return res.json()
    }).then(responseJson => {
      return responseJson.images
    })
  return {type: 'FETCH_CATS', payload: cats}
}