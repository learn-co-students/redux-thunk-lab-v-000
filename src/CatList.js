import React, { Component } from 'react'

export default class CatList extends Component{


    render(){
        console.log(this.props.cats)
        return (
            <div>
                {this.props.catPics.map(cat => <img src={cat.url} />)}
            </div>
        )
    }
}