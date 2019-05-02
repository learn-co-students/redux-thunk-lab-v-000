export function fetchCats() {
  fetch('http://localhost:4000/db').then(response => {
    return response.json()
  }).then(responseJSON => {
    return responseJSON.images
  })
}
