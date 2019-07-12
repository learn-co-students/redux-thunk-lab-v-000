import React, { Component } from 'react';

class CatList extends Component {
    
    render() {
        const catImages = (this.props.loading) ? 
            (<h2>Loading Cats...</h2>) : 
            (this.props.catPics.map( (pic, id) => <img src={pic.url} alt={id} /> ))
        
        return (
            <div>
            {catImages}
            </div>
        )
    }
}

export default CatList