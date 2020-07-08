// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    
    renderCats = () => this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.source_url} />);

    render() {

        console.log(this.props.catPics)
        return (
            <div>
                {this.props.loading ?  "Loading..." : this.renderCats()}
            </div>
        );
    }
};

export default CatList;
