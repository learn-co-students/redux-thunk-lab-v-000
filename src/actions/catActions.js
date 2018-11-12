import React from 'react'

export default function fetchCats(dispatch){
  return fetch('http://localhost:4000/db')
  .then(response => response.json())
  .then(cats => dispatch({type: 'FETCH_CATS', cats: cats.images}))

}
