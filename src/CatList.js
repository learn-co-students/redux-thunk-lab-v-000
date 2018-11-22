import React, { Component } from 'react'


export default class Catlist extends Component {

    render() {
        return (
            <div>
                {this.props.catPics.map((pic, idx) => <img key={idx} src={pic.url} alt="catPic"/> )}
            </div>
        )
    }
}