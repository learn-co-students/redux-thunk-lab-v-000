import React, { Component } from "react"

class CatList extends Component {
    
    renderCatPics = () => { 
        console.log(this.props.catPics)
        return this.props.catPics.map(x => <div key={x.id}><a href={x.source_url}><img src={x.url}alt=""/></a></div>)
    }

    
    render() {
        return (
            <div>
            cat test
            {this.renderCatPics()}
            </div>
            )
    }
}

export default CatList