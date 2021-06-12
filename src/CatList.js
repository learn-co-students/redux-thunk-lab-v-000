import React, { Component} from 'react'

class CatList extends Component{
    render(){
        return (
            <div>
                {this.props.catPics.map(pic=><img src={this.props.url}></img>)}
            </div>
        )
    }
}

export default CatList;