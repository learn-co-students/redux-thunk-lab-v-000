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

// function fetchCats(){
//   return (dispatch) => {
//     dispatch({type: 'LOADING_CATS'});
//     return fetch('http://localhost:4000/db')
//     .then( response => response.json())
//     // .then(function(data){
//     //
//     //   console.log(data.images)
//     //   return data.images
//     // })
//     .then( cats => dispatch({
//       type: 'FETCH_CATS',
//       payload: cats.images
//     }))
//
//   }
// }
//
// export default fetchCats


// export default function fetchCats(){
//   const cats = [
//     {
//       name: "miaou",
//       url: "http://25.media.tumblr.com/tumblr_lyufg8UKQ51qgg1s9o1_500.jpg",
//       id: "ajs",
//       source_url: "http://thecatapi.com/?id=ajs"
//     },
//     {
//       name: "bobby",
//       url: "http://25.media.tumblr.com/tumblr_m3msylztR51r73wdao1_400.jpg",
//       id: "3pi",
//       source_url: "http://thecatapi.com/?id=3pi"
//     },
//     {
//       name: "itchy",
//       url: "http://25.media.tumblr.com/tumblr_loq2s4WIhd1qmhgtro1_400.jpg",
//       id: "5p9",
//       source_url: "http://thecatapi.com/?id=5p9"
//     },
//     {
//       name: "kitty",
//       url: "http://25.media.tumblr.com/tumblr_lzqenfqxJw1qd5euro1_1280.jpg",
//       id: "bsd",
//       source_url: "http://thecatapi.com/?id=bsd"
//     }
//   ]
//
//   return {
//     type: 'FETCH_CATS',
//     cats: cats
//   }
// }
