export function fetchCats() {
  const cats = fetch('http://localhost:4000/db')
  .then(response => response.json()).then(responseJSON => {responseJSON.images})
  return {
      type: 'FETCH_CATS',
      cats: cats
    };

  //why this and not what's in the lesson code? 
  // export function fetchCats() {
  //   const cats = fetch('http://localhost:4000/db').then(response => response.json())
  //   return {
  //     type: 'FETCH_CATS',
  //     cats: cats
  //   };
  // } is it because the data is nested? 
