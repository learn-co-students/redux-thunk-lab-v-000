import React from 'react'


class CatList extends React.Component {

  renderCats = () => {
    return this.props.catPics.map(pic => {
      return <img key={pic.id} src={pic.url} alt="catPic" />
    })
  }

  render() {
    return (
      <ul>
        {this.renderCats()}
      </ul>

    )
  }

}

export default CatList
