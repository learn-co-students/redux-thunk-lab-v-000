import React, { Component } from 'react';
import cuid from 'cuid';

class CatList extends Component {
    render() {
        const catList = this.props.catPics.map(cat => <li key={cuid()}><img src={cat.url} alt="cat-picture" /></li>)
        return (
            <ul>
                {catList}
            </ul> 
        )
    }
}

export default CatList;