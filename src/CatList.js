import React, { Component } from 'react'

class CatList extends Component {

  render() {
    const { catPics } = this.props
    const catList = catPics.map((pic) => <p key={pic.id}><img src={pic.url} alt={pic.url}></img></p>)

    return (
      <div>
        {catList}
      </div>
    )
  }
}

export default CatList
