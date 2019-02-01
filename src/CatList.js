import React, { Component } from 'react';

class CatList extends Component {

    renderCats = () => {
        return this.props.catPics.map((catPic, idx) => {
            return (
                <img key={idx} src={catPic.url} alt="catpic" />
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderCats()}
            </div>
        )
    }
}

export default CatList