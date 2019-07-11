import React, { Component } from 'react';

class CatList extends Component {
    
    catImages = () => this.props.catPics.map( (picture, id) => 
        <li key={id}>
            <img src={picture.url} alt={id} />
        </li>
    )

    render() {
        // for testing purposes:
        console.log(this.props)
        // console.log(this.props.loading)
        
        return (
            <div>
            We are inside the CatList render method...
            {/* This next line returns an error saying this.props.catPics is undefined */}
            {this.catImages()}
            </div>
        )
    }
}

export default CatList;


// Formatting of cat db for reference:
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