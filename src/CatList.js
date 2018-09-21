import React, {Component} from 'react'

class CatList extends Component {

  renderCats(){
    return this.props.catPics.map(pic => {
      return (
        <li key={pic.id}>
          <img src={pic.url} />
        </li>
      )
    })
  } 
  render(){
    
    return(
      <ul>
        {this.renderCats()}
      </ul>
    )
  }
}

export default CatList