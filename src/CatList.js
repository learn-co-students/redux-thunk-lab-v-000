// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div>
          <h3>THE CATS ARE COMING</h3>
        </div>
      )
    }
    return (
      <div className="cats-container">
        {this.props.catPics.map((catPic, index) => <img key={index} src={catPic.url} alt='an amazing cat'></img>)}
      </div>
    )
  }
}

export default CatList