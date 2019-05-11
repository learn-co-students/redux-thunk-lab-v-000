import React, {Component} from 'react'

class CatList extends Component {

  renderCats = () => {
    console.log("cat pics are:", this.props.catPics)
  }


  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }
}

export default CatList
