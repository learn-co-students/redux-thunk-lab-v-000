export function fetchCats() {
	console.log("inside fetchCats action")
  return function (dispatch) {
  	
    dispatch({ type: 'LOADING_CATS' });

    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(cats => 
      
      	dispatch({ type: 'FETCH_CATS', payload: cats.images} )

      	);
  };
}
