import React, { Component } from 'react'

class CatList extends Component {

    render() {
        console.log(this.props)
        const cats = this.props.catPics.map(cat => {
         return <img src={cat.url} alt="cat pic" />
        })
        return (
        <div>
            {cats}
            
        </div>
        )
    }

}

export default CatList
