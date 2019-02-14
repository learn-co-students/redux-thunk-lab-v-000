import React from 'react'

export default class CatList extends React.Component {

    renderCatImages = () =>{
    return this.props.catPics.map(pic => { return <li><img key={pic.id} src={pic.url} alt="catPic" /></li> })
    }

    render(){
        return(
            <div>
                {this.renderCatImages()}
            </div>
        )
    }
}

