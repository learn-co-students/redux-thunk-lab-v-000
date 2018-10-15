import React, { Component } from 'react'

class CatList extends Component {
    renderCatPics = () => this.props.catPics.map(cat =>
        <img key={cat.id} alt="A cute cat" src={cat.url} />
    )

    render(){
        return (
            <div id="catPics">
                {this.renderCatPics()}
            </div>
        )
    }
}

export default CatList