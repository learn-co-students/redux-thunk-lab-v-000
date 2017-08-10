//export function fetchCats() {
//  const cats = fetch('http://localhost:3000/db').then(response => response.json()).then(responseJSON => { return responseJSON.images })
//  return {
//    type: 'FETCH_CATS', 
//    cats
//  };
//}


export function fetchCats() {
  return (dispatch) => {
    dispatch({ loading: true });
    return fetch('http://localhost:3000/db')
      .then(response => response.json())
      //.then(cats => dispatch({ type: 'FETCH_CATS', responseJSON }));
      .then(cats => dispatch({ type: 'FETCH_CATS', url: "http://25.media.tumblr.com/tumblr_m43h4dqf0P1r12rv0o1_400.gif"}));
  };
}