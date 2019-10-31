// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {
        return <div>
            {this.props.catPics.map(pic => <img src={pic.url} alt="cat" />)}
        </div>;
    };
}

export default CatList;