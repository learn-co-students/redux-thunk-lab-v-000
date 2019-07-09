import React, { Component } from 'react';

class CatList extends Component {
    catImages = () => this.props.catPics.map( (pic, id) => 
        <li key={id}>
            <img src={pic.url} />
        </li>
    )

    render() {
        return (
            <div>
            {console.log(this.props.catPics)}
            {/* {this.catImages()} */}
            </div>
        )
    }
}

export default CatList;

// Formatting of cat db:
// {
//   "images": [
//     {
//       "url": "http://25.media.tumblr.com/tumblr_lyufg8UKQ51qgg1s9o1_500.jpg",
//       "id": "ajs",
//       "source_url": "http://thecatapi.com/?id=ajs"
//     },
//     {
//       "url": "http://25.media.tumblr.com/tumblr_m3msylztR51r73wdao1_400.jpg",
//       "id": "3pi",
//       "source_url": "http://thecatapi.com/?id=3pi"
//     },