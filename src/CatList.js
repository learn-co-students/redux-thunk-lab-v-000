// write your CatList component here
import React, {Component} from 'react'

class CatList extends Component {
render(){
    return(
        <div>{this.props.catPics.map( x => <img key={x.id} src={x.url} alt={x.id}/>)}</div>
    )
}
    

}
export default CatList