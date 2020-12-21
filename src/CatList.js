// write your CatList component here

import React from 'react'

class CatList extends React.Component {
    render(){
        // console.log(this.props.catPics)
        let pics = this.props.catPics.map(pic => <img src={pic.url}></img>)
        return (
            <div>{pics}</div>
        )
    }
}

export default CatList