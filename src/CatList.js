// write your CatList component here

import React, { Component } from 'react';

 class CatList extends Component {

    renderCatPics = () => {
        return this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.src_url}></img>)
    }

    render() {
        return(
            <div>
              { this.renderCatPics() }
            </div>
            
        );
    }
}

export default CatList;