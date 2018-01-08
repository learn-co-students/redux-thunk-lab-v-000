import fetch from "isomorphic-fetch";

export function fetchCats(){
  return (dispatch) => {
    fetch("http://localhost:4000/images")
      .then(response => response.json())
      .then(cats => dispatch({ type: "FETCH_CATS", cats }) )
      .catch(error => {
        console.log(error)
        throw error;
      });
  }
}