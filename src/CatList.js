import React, { Component } from 'react';

 export default class CatList extends Component {
    renderCats() {
        return this.props.catPics.map((pic, id) => <img src={pic} key={id} alt='cat' /> )
    }

     render() {
        return (
            <div>
                {this.renderCats()}
            </div>
        )
    }
}
