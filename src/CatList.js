// write your CatList component here
import React, {Component} from 'react';

export default class CatList extends Component {
    
    renderCats = () => {
        if (this.props.loading) {
            return <div>Loading</div>
        } else {
            console.log(this.props.catPics)
            return (
                this.props.catPics.map(cat => {
                    return <img src={cat.url} alt={cat.source_url} id={cat.id}/>
                }))
        }
    }
    
    render() {
        return <div>{this.renderCats()}</div>;
    }
}