import React, { Component} from 'react'

class CatList extends Component{
    render(){
        return (
            <div>
                {this.props.catPics.map(cat => <img key={cat.id} src={cat.url} width="100" height="120" alt={cat.id}/>)}
            </div>
        )
    }
}

export default CatList;