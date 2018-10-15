import React, { Component } from 'react'

class CatList extends Component {
    renderCatPics = () => this.props.cats.map(cat =>
        <img alt="A cute cat" src={cat.url} />
    )

    render(){
        console.log(this.props.cats)
        console.log(typeof this.props.cats)
        return (
            <div id="catPics">
                {this.renderCatPics()}
            </div>
        )
    }
}

export default CatList