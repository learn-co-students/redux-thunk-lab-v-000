import React, { Component } from "react"

class CatList extends Component {
    
    renderCatPics = () => {
    }
    
    componentDidMount() {
        this.props.fetchCats()
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