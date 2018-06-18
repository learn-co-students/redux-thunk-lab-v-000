import fetch from 'isomorphic-fetch';

export function fetchCats() {
  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATS', payload: responseJson.images})
    })
    // return cats;
  }
}

// export function fetchCats() {
//   const cats = fetch('http://localhost:4000/db')
//   		.then(response => response.json())
//   		.then(responseJSON => {
//   			return responseJSON.images
// 		})

//   return {
// 	type: 'FETCH_CATS',
// 	 cats
// 	};
// }

