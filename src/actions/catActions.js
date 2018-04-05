import React from 'react'

export function fetchCats() {
  const cats = fetch('http://localhost:4000/db')
  .then(response => {
  return response.json()
  }).then(responseJSON => {
    return {
      type: 'FETCH_CATS',
      payload: cats
    };
  })
}

// This action should use fetch to make the web request for your cat pic JSON.
// It should use a then function to parse the JSON of the response to this request, and another
// .then function chained on that to grab the actual collection of cat pic image objects. Something like:
// 1.	fetch('http://localhost:4000/db').then(response => {
// 2.	  return response.json()
// 3.	}).then(responseJSON => {
// 4.	  return responseJSON.images
// 5.	})

// Save the results of this fetch request to a const, cats, and make sure your action creator
// function returns an object with a type of 'FETCH_CATS' and a payload of the cats collection.
